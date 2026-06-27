import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./ImmersiveScene.module.scss";

const palette = ["#49e6c8", "#ff4f9a", "#ffb34d", "#6f7cff"].map(
  (color) => new THREE.Color(color),
);

const ImmersiveScene = () => {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    host.appendChild(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);
    scene.add(new THREE.AmbientLight("#ffffff", 1.25));

    const keyLight = new THREE.PointLight("#ff5d9d", 34, 22);
    keyLight.position.set(4, 3, 5);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight("#4de7d0", 28, 20);
    fillLight.position.set(-4, -2, 4);
    scene.add(fillLight);

    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: "#8e72ff",
      roughness: 0.18,
      metalness: 0.18,
      transmission: 0.42,
      thickness: 1.5,
      transparent: true,
      opacity: 0.88,
      iridescence: 0.85,
      iridescenceIOR: 1.45,
    });
    const core = new THREE.Mesh(new THREE.TorusKnotGeometry(1.6, 0.47, 180, 28), coreMaterial);
    core.rotation.set(0.3, -0.35, 0.1);
    world.add(core);

    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: "#ff764d",
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(2.65, 2), shellMaterial);
    world.add(shell);

    const shardGeometry = new THREE.BoxGeometry(0.65, 1.85, 0.12);
    const shards = Array.from({ length: 6 }, (_, index) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: palette[index % palette.length],
        roughness: 0.12,
        transmission: 0.55,
        transparent: true,
        opacity: 0.62,
      });
      const shard = new THREE.Mesh(shardGeometry, material);
      const angle = (index / 6) * Math.PI * 2;
      shard.position.set(Math.cos(angle) * 3.5, Math.sin(angle) * 2.1, -0.7 + (index % 2) * 1.4);
      shard.rotation.set(angle * 0.2, angle, angle * 0.45);
      world.add(shard);
      return shard;
    });

    const particleCount = 1300;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.6 + Math.random() * 4.5;
      const angle = Math.random() * Math.PI * 2;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[index * 3 + 2] = Math.sin(angle) * radius - 1;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: "#d7d5ff",
      size: 0.026,
      transparent: true,
      opacity: 0.62,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    world.add(particles);

    const pointer = new THREE.Vector2();
    let scrollProgress = 0;
    let frameId;

    const resize = () => {
      const width = host.clientWidth || window.innerWidth;
      const height = host.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const updateScroll = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollProgress = window.scrollY / maxScroll;
    };

    const updatePointer = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const clock = new THREE.Clock();
    const render = () => {
      const movement = reducedMotion ? 0 : clock.getElapsedTime();
      world.rotation.y += ((scrollProgress * Math.PI * 3.2 + pointer.x * 0.12) - world.rotation.y) * 0.035;
      world.rotation.x += ((scrollProgress * 0.85 - pointer.y * 0.08) - world.rotation.x) * 0.035;
      world.position.y = Math.sin(scrollProgress * Math.PI * 4) * 0.45;
      world.scale.setScalar(0.92 + Math.sin(scrollProgress * Math.PI * 3) * 0.14);

      core.rotation.z = movement * 0.08 + scrollProgress * Math.PI;
      shell.rotation.y = -movement * 0.045;
      shell.rotation.x = movement * 0.025;
      particles.rotation.y = movement * 0.012 - scrollProgress * 0.8;
      shards.forEach((shard, index) => {
        shard.rotation.x = movement * (0.08 + index * 0.006) + index;
        shard.position.z = Math.sin(movement * 0.45 + index + scrollProgress * 8) * 1.3;
      });

      const paletteIndex = Math.min(Math.floor(scrollProgress * palette.length), palette.length - 1);
      coreMaterial.color.lerp(palette[paletteIndex], 0.025);
      keyLight.color.lerp(palette[(paletteIndex + 1) % palette.length], 0.025);
      fillLight.color.lerp(palette[(paletteIndex + 3) % palette.length], 0.025);
      camera.position.z = 8.5 - Math.sin(scrollProgress * Math.PI) * 1.2;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    resize();
    updateScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      core.geometry.dispose();
      coreMaterial.dispose();
      shell.geometry.dispose();
      shellMaterial.dispose();
      shardGeometry.dispose();
      shards.forEach((shard) => shard.material.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className={styles.scene} aria-hidden="true">
      <div ref={hostRef} className={styles.canvasHost}></div>
      <div className={styles.vignette}></div>
      <div className={styles.noise}></div>
    </div>
  );
};

export default ImmersiveScene;
