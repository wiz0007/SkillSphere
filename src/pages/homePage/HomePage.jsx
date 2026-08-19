import React from "react";
import Seo from "../../components/seo/Seo";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Idea from "../../components/Idea/Idea";
import CoursesPreview from "../../components/courses/CoursesPreview";
import Environment from "../../components/environment/Environment";
import Currency from "../../components/currency/Currency";
import HelpCenter from "../../components/helpCenter/HelpCenter";
import OurTeam from "../../components/ourTeam/OurTeam";
import Connect from "../../components/connect/Connect";
import FinalCta from "../../components/finalCta/FinalCta";
import Footer from "../../components/footer/Footer";
import styles from "./HomePage.module.scss";

const HomePage = () => (
  <div className={styles.page}>
    <Seo />
    <a className="skipLink" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <Idea />
      <CoursesPreview />
      <Environment />
      <Currency />
      <HelpCenter />
      <OurTeam />
      <Connect />
      <FinalCta />
    </main>
    <Footer />
  </div>
);

export default HomePage;
