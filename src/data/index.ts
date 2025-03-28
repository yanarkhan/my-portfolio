/* Projects Section */
import sonyLandingPage from "../../public/images/sonyHeadphonesLandingPage.png";
import companyLandingPage from "../../public/images/companyReactTailwind.png";
import weatherApp from "../../public/images/weatherForecast.png";

export const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Sony Headphones",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://sony-headphones-website.vercel.app/",
    image: sonyLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Company Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://company-react-tailwind.vercel.app/",
    image: companyLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Weather App",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://weather-app-forecast-sand.vercel.app/",
    image: weatherApp,
  },
];

/* Bento Section */

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiPrisma,
  SiReactquery,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiShadcnui,
} from "react-icons/si";

import type { IconType } from "react-icons";

interface FileItem {
  icon: IconType;
  name: string;
}

export const files: FileItem[] = [
  {
    icon: SiHtml5,
    name: "HTML5",
  },
  {
    icon: SiCss3,
    name: "CSS3",
  },
  {
    icon: SiJavascript,
    name: "Javascript",
  },
  {
    icon: SiTailwindcss,
    name: "TailwindCSS",
  },
  {
    icon: SiGit,
    name: "Git",
  },
  {
    icon: SiMysql,
    name: "MySQL",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  {
    icon: SiReact,
    name: "React.js",
  },
  {
    icon: SiExpress,
    name: "Express.js",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
  },
  {
    icon: SiTypescript,
    name: "Typescript",
  },
  {
    icon: SiReactquery,
    name: "TanstackQuery",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  {
    icon: SiShadcnui,
    name: "Shadcn/ui",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
  },
];
