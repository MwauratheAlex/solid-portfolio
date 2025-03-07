import carz from "./assets/images/carz.png"
import gpt3 from "./assets/images/gpt-3.webp"
import mbumwa3d from "./assets/images/mbumwa3d.webp"
import caseKraze from "./assets/images/caseKraze.webp"
import justgymit from "./assets/images/justgymit.webp"
import movieland from "./assets/images/movie-land.webp"
import landingpage from "./assets/images/landing-page.webp"
import nftshowcase from "./assets/images/nft-showcase.webp"
import nftmarketplace from "./assets/images/nft-marketplace.webp"

export type Project = {
  title: string;
  git: string;
  liveLink: string;
  description: string;
  img: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "mCarz",
    git: "https://github.com/MwauratheAlex/mCarz.git",
    liveLink: "https://carz.mbumwa.com/",
    description: "A vehicle buying and selling website. Showcasing aggressive caching and prefetching for blazingly fast web application.",
    img: carz,
    technologies: ["NextJs", "Typescript", "Mongodb"],
  },
  {
    title: "CaseKraze",
    git: "https://github.com/MwauratheAlex/caseKraze",
    liveLink: "https://case.mbumwa.com",
    description: "Capture your favourite memories with your phone. CaseKraze allows you to protect your memories, not just your phone case.",
    img: caseKraze,
    technologies: ["NextJs", "PostgreSQL", "Stripe", "Typescript"],
  },
  {
    title: "Mbumwa3D",
    git: "https://github.com/MwauratheAlex/mbumwa3d.git",
    liveLink: "https://3d.mbumwa.com/",
    description: "A 3D printing Web application connecting people with 3D printers and those without. Payment is processed using the Mpesa Daraja Api.",
    img: mbumwa3d,
    technologies: ["Go", "HTML", "CSS", "HTMX", "JavaScript"],
  },
  {
    title: "NFT Marketplace App",
    git: "https://github.com/MwauratheAlex/NFTMarketplace.git",
    liveLink: "https://nftmarketplaceshowcase.on.fleek.co/",
    description: "A cross-platform React Native Application. Users can see and search through listed NFTs and scroll through them. The NFT details page allows users to see more information about a specific NFT and see all it's active bids.",
    img: nftmarketplace,
    technologies: ["ReactNative", "JavaScript"],
  },
  {
    title: "NFT Marketplace Showcase",
    git: "https://github.com/MwauratheAlex/NFTMarketplaceShowcase.git",
    liveLink: "https://nftmarketplaceshowcase.on.fleek.co/",
    description: "A landing page for the NFT Marketplace Application. All details about the app are shared in this smooth single page website, together with the download link as well as all the app features. The page is hosted on IPFS, a completely decentralized peer-to-peer protocol.",
    img: nftshowcase,
    technologies: ["React", "JavaScript"],
  },
  {
    title: "Startup Landing Page",
    git: "https://github.com/MwauratheAlex/nextjs_landing_page.git",
    liveLink: "https://business-landing-page-mwaura.netlify.app/",
    description: "A fully functional, mobile responsive, beautiful, single page website built using Next Js. Using this landing page will surely drive more traffic to your startup.",
    img: landingpage,
    technologies: ["NextJs", "JavaScript"],
  },
  {
    title: "GPT-3",
    git: "https://github.com/MwauratheAlex/gpt3.git",
    liveLink: "https://gpt-3-mwaura.netlify.app/",
    description: "A fully responsive GPT-3 website/landing page with modern UI/UX following a Figma design built with React.",
    img: gpt3,
    technologies: ["React", "JavaScript", "Figma"],
  },
  {
    title: "Just Gym It",
    git: "https://github.com/MwauratheAlex/gym_exercises.git",
    liveLink: "https://justgymit.netlify.app/",
    description: "A modern React 18 Fitness Exercises App with the functionality to choose exercise categories and specific muscle groups. Browse 1000+ exercises with practical examples.",
    img: justgymit,
    technologies: ["React", "JavaScript", "Api"],
  },
  {
    title: "MovieLand",
    git: "https://github.com/MwauratheAlex/movieLand-react.git",
    liveLink: "https://movie-land-mwaura.netlify.app/",
    description: "A fully mobile-responsive React JS Application that displays movies and allows users to search for any movie on the internet.",
    img: movieland,
    technologies: ["React", "JavaScript"],
  }
];

import { TbBrandNextjs, TbBrandJavascript, TbBrandSolidjs } from 'solid-icons/tb'
import { FaBrandsReact, FaBrandsGolang } from 'solid-icons/fa'
import { BiLogosTypescript, BiLogosMongodb } from 'solid-icons/bi'
import { SiPostgresql, SiMysql } from 'solid-icons/si'
import { cSVG } from "./components/csvg"

export const TECHNOLOGIES = [
  { name: "NextJS", icon: TbBrandNextjs, color: "text-gray-200" },
  { name: "React", icon: FaBrandsReact, color: "fill-cyan-300/90" },
  { name: "SolidJS", icon: TbBrandSolidjs, color: "text-blue-300/90" },
  { name: "Go", icon: FaBrandsGolang, color: "fill-sky-300/90" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "text-yellow-300/90" },
  { name: "TypeScript", icon: BiLogosTypescript, color: "fill-blue-300/90" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "fill-cyan-600/90" },
  { name: "MySQL", icon: SiMysql, color: "fill-sky-500" },
  { name: "Mongodb", icon: BiLogosMongodb, color: "fill-green-300/90" },
  { name: "C", icon: cSVG },
]

