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
import myPic from "../assets/MyPic.jpeg";
import courseWeb from "../assets/courses/course-web.webp";
import courseDesign from "../assets/courses/course-design.webp";
import courseMedia from "../assets/courses/course-media.webp";
import courseGrowth from "../assets/courses/course-growth.webp";

export const ideaCards = [
  {
    id: "01",
    icon: FaChalkboardTeacher,
    label: "Learn live",
    title: "Ask a person, not a feed.",
    copy: "Book a focused session when you need context, feedback, or a second pair of eyes.",
    accent: "1:1 guidance",
    detail: "Move from searching for answers to working through the problem with someone who has done it before.",
  },
  {
    id: "02",
    icon: FaUsers,
    label: "Keep going",
    title: "Learning stays connected.",
    copy: "Carry a learning goal from the live session into chat, groups, and the next milestone.",
    accent: "One learning thread",
    detail: "The context around a session should not disappear when the call ends. SkillSphere keeps the journey connected.",
  },
  {
    id: "03",
    icon: FaShieldAlt,
    label: "Exchange clearly",
    title: "Trust is part of the flow.",
    copy: "Bookings and mentor payouts stay understandable through the SkillCoin wallet and audit trail.",
    accent: "Clear transaction flow",
    detail: "A transparent exchange makes it easier for learners and mentors to focus on the work instead of the mechanics.",
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
  {
    id: "session",
    icon: FaVideo,
    eyebrow: "Live rooms",
    title: "Meet live.",
    copy: "Share the screen and work through the problem together.",
    meta: "Video · Screen share · Session context",
    visual: "room",
  },
  {
    id: "conversation",
    icon: FaComments,
    eyebrow: "Conversation",
    title: "Keep the thread.",
    copy: "Continue in chat without starting the explanation over.",
    meta: "Chat · Attachments · Follow-up",
    visual: "chat",
  },
  {
    id: "groups",
    icon: FaUsers,
    eyebrow: "Learning groups",
    title: "Learn together.",
    copy: "Join focused groups around a shared skill or goal.",
    meta: "Groups · Shared goals · Community",
    visual: "group",
  },
  {
    id: "feedback",
    icon: FaHandsHelping,
    eyebrow: "Mentor feedback",
    title: "Get focused feedback.",
    copy: "Bring a blocker back to a mentor and get a clear next step.",
    meta: "Review · Guidance · Next step",
    visual: "feedback",
  },
];

export const currencySteps = [
  {
    icon: FaWallet,
    title: "Add",
    kicker: "Fund the wallet",
    copy: "Top up SkillCoin before you book.",
    status: "Wallet ready",
    amount: "+250 SC",
    balance: "250 SC",
  },
  {
    icon: FaCoins,
    title: "Book",
    kicker: "Reserve a session",
    copy: "Use coins for a course or live mentor session.",
    status: "Booking created",
    amount: "−80 SC",
    balance: "170 SC",
  },
  {
    icon: FaLock,
    title: "Hold",
    kicker: "Protect the exchange",
    copy: "The booking value stays protected during the session flow.",
    status: "80 SC protected",
    amount: "On hold",
    balance: "170 SC",
  },
  {
    icon: FaBookOpen,
    title: "Complete",
    kicker: "Release on completion",
    copy: "The mentor payout is released when the session is completed.",
    status: "Session settled",
    amount: "80 SC released",
    balance: "170 SC",
  },
];

export const supportItems = [
  {
    icon: FaHeadset,
    title: "Platform support",
    copy: "Get help with accounts, bookings, payments, courses, and general platform issues.",
    response: "Best for account, booking, or access questions.",
  },
  {
    icon: FaShieldAlt,
    title: "Fair dispute review",
    copy: "Disputes can be reviewed with the available booking and transaction context.",
    response: "A structured path when a session or transaction needs review.",
  },
  {
    icon: FaLock,
    title: "Protected records",
    copy: "Transaction and audit records help preserve accountability across the learning flow.",
    response: "Useful when the history of an exchange needs to be checked.",
  },
];

export const developerProfile = {
  name: "Ayushmaan Mishra",
  role: "Full-Stack Developer & Product Builder",
  bio: "Designing and building SkillSphere across product experience, frontend systems, backend services, real-time features, and platform architecture.",
  scope: ["Product", "Frontend", "Backend", "Realtime"],
  image: myPic,
  links: [
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayushmaan-mishra-254020257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: FaTwitter, label: "X", href: "https://x.com/Ayushma44434272?t=diX25cD-oLYEhuE_-7aLQA&s=08" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/wiz0007" },
  ],
};
