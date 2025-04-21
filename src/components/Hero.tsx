import profileMemo from "../../public/images/profileMemoji.png";
import Image from "next/image";
import { RippleButton } from "./magicui/ripple-button";
import { Hand, MoveDown } from "lucide-react";
import Link from "next/link";
import { StatusBadge } from "./elements/StatusBadge";

export const Hero = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={profileMemo} className="size-24" alt="Profile Memoji" />
          <StatusBadge />
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center tracking-wide mt-8 md:text-5xl">
            Building Exceptional User Experiences!
          </h1>
          <p className="text-center text-white/60 mt-4 md:text-lg">
            I build modern, responsive web apps with React.js, Next.js, and
            Tailwind CSS, focusing on API integration, state management, and
            user experience.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 gap-4 md:flex-row">
          <Link href="#projects" scroll={true}>
            <RippleButton
              className="w-72 border border-white/15 bg-black text-white md:w-60"
              title="Explore My Projects"
              icon={<MoveDown className="size-5" />}
              position="left"
              rippleColor="#34D399"
            />
          </Link>
          <Link href="#footer" scroll={true}>
            <RippleButton
              className="w-72 border border-white bg-white text-gray-900 md:w-60"
              title="Get in Touch"
              icon={<Hand className="size-5" />}
              position="right"
              rippleColor="#ADD8E6"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
