import { MdDesignServices } from "react-icons/md";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

export const data = [
  {
    id: 1,
    icon: <MdDesignServices />,
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-centric  interfaces that enhance usability, engagement, and digital experiences.",
    points: [
      "User research & wireframing",
      "High-fidelity prototypes", 
      "Clean visual design",
      "Design system consistency",
    ],
  },
  {
    id: 2,
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Developing fast, responsive web interfaces using modern frameworks for performance and scalability.",
    points: [
      "React.js & Next.js apps",
      "Responsive UI layouts",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Building secure and scalable backend systems with well-structured APIs and reliable server logic.",
    points: [
      "RESTful API development",
      "Authentication & authorization",
      "Database modeling",
      "Scalable server logic",
    ],
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: "Full-Stack Development",
    description:
      "Delivering complete web applications from concept to production with scalable architecture.",
    points: [
      "Idea-to-production delivery",
      "MERN & Django stacks",
      "SaaS architecture",
      "Deployment & maintenance",
    ],
  },
  {
    id: 5,
    icon: <SiBlockchaindotcom />,
    title: "Web3 & Trading Platforms",
    description:
      "Creating high-performance Web3 and trading platforms with secure, real-time data handling.",
    points: [
      "Blockchain API integration",
      "Real-time market data",
      "Trading dashboards",
      "High-performance UI",
    ],
  },
];

