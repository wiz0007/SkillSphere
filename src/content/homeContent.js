import {
  FaBookOpen,
  FaBullhorn,
  FaCamera,
  FaChalkboardTeacher,
  FaCode,
  FaCoins,
  FaComments,
  FaGithub,
  FaHandsHelping,
  FaHeadset,
  FaLinkedin,
  FaLock,
  FaPalette,
  FaShieldAlt,
  FaTwitter,
  FaUsers,
  FaVideo,
  FaWallet,
} from "react-icons/fa";
import ayushFallback from "../assets/team/ayushImg.jpg";
import courseWeb from "../assets/courses/course-web.webp";
import courseDesign from "../assets/courses/course-design.webp";
import courseMedia from "../assets/courses/course-media.webp";
import courseGrowth from "../assets/courses/course-growth.webp";

const profileAssets = import.meta.glob(
  "../assets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
);

const preferredProfileImage =
  profileAssets["../assets/MyPic.jpeg"] ||
  profileAssets["../assets/MyPic.jpg"] ||
  profileAssets["../assets/mypic.jpeg"] ||
  profileAssets["../assets/mypic.jpg"] ||
  ayushFallback;

export const ideaCards = [
  {
    id: "01",
    icon: FaChalkboardTeacher,
    label: "Learn live",
    title: "Ask a person, not a feed.",
    copy: "Book focused sessions and get practical guidance in real time.",
  },
  {
    id: "02",
    icon: FaUsers,
    label: "Keep going",
    title: "Learning stays connected.",
    copy: "Continue through groups, conversations, and shared learning spaces.",
  },
  {
    id: "03",
    icon: FaShieldAlt,
    label: "Exchange clearly",
    title: "Trust is part of the flow.",
    copy: "SkillCoin keeps bookings and mentor payouts easy to follow.",
  },
];

export const courseCategories = [
  {
    id: "web",
    icon: FaCode,
    title: "Web Development",
    kicker: "Build for the web",
    topics: ["React", "Node.js", "APIs"],
    visual: "code",
    image: courseWeb,
    imageAlt: "Developer working with source code on a laptop",
    imagePosition: "center",
  },
  {
    id: "design",
    icon: FaPalette,
    title: "UI/UX Design",
    kicker: "Shape useful experiences",
    topics: ["Figma", "UX", "Systems"],
    visual: "design",
    image: courseDesign,
    imageAlt: "Wireframe sketches and interface planning on a designer workspace",
    imagePosition: "center",
  },
  {
    id: "media",
    icon: FaCamera,
    title: "Photography & Media",
    kicker: "Create with a point of view",
    topics: ["Capture", "Editing", "Story"],
    visual: "media",
    image: courseMedia,
    imageAlt: "Photographer editing images beside a camera and laptop",
    imagePosition: "center",
  },
  {
    id: "growth",
    icon: FaBullhorn,
    title: "Business & Marketing",
    kicker: "Turn ideas into traction",
    topics: ["SEO", "Brand", "Growth"],
    visual: "growth",
    image: courseGrowth,
    imageAlt: "Analytics dashboard with charts displayed on a laptop",
    imagePosition: "center",
  },
];

export const communityFeatures = [
  { icon: FaVideo, title: "Live sessions", copy: "Meet mentors face to face." },
  { icon: FaComments, title: "Conversation", copy: "Continue learning in chat." },
  { icon: FaUsers, title: "Groups", copy: "Learn with people chasing the same goal." },
  { icon: FaHandsHelping, title: "Mentor feedback", copy: "Get help when you are blocked." },
];

export const currencySteps = [
  { icon: FaWallet, title: "Add", copy: "Top up your SkillCoin wallet." },
  { icon: FaCoins, title: "Book", copy: "Use coins for a course or live session." },
  { icon: FaLock, title: "Hold", copy: "Value stays protected during the session flow." },
  { icon: FaBookOpen, title: "Complete", copy: "Mentor payout is released after completion." },
];

export const supportItems = [
  {
    icon: FaHeadset,
    title: "Platform support",
    copy: "Get help with accounts, bookings, payments, courses, and general platform issues.",
  },
  {
    icon: FaShieldAlt,
    title: "Fair dispute review",
    copy: "Disputes can be reviewed with the available booking and transaction context.",
  },
  {
    icon: FaLock,
    title: "Protected records",
    copy: "Transaction and audit records help preserve accountability across the learning flow.",
  },
];

export const developerProfile = {
  name: "Ayushmaan Mishra",
  role: "Full-Stack Developer & Product Builder",
  bio: "Designing and building SkillSphere across product experience, frontend systems, backend services, real-time features, and platform architecture.",
  scope: ["Product", "Frontend", "Backend", "Realtime"],
  image: preferredProfileImage,
  links: [
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayushmaan-mishra-254020257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: FaTwitter, label: "X", href: "https://x.com/Ayushma44434272?t=diX25cD-oLYEhuE_-7aLQA&s=08" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/wiz0007" },
  ],
};
