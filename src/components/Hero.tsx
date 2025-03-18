import profileMemo from "../../public/images/profileMemoji.png";
import Image from "next/image";
import { RippleButton } from "./magicui/ripple-button";
import { Hand, MoveDown } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={profileMemo} className="size-24" alt="Profile Memoji" />

          {/* Status Badge */}
          <div className="bg-gray-950 border border-gray-800 inline-flex items-center rounded-3xl px-4 py-1.5 gap-4">
            <div className="bg-emerald-500 size-2.5 rounded-full relative">
              <div className="bg-emerald-500/50 inset-0 rounded-full absolute animate-pingLarge"></div>
            </div>
            <div className="text-sm font-medium">
              Available for opportunities
            </div>
          </div>
          {/* End Status Badge */}
        </div>
        <h1 className="font-serif text-3xl text-center tracking-wide mt-8">
          Building Exceptional User Experiences!
        </h1>
        <p className="text-center text-white/60 mt-4">
          I build modern, responsive web apps with React.js, Next.js, and
          Tailwind CSS, focusing on API integration, state management, and user
          experience.
        </p>

        <div className="flex flex-col items-center justify-center mt-8 gap-4">
          <RippleButton
            className="border border-white/15 bg-transparent text-white"
            title="Explore My Project"
            icon={<MoveDown className="size-5" />}
            position="left"
            rippleColor="#34D399"
          />
          <RippleButton
            className="border border-white bg-white text-gray-900"
            title="Get in Touch"
            icon={<Hand className="size-5" />}
            position="right"
            rippleColor="#ADD8E6"
          />
        </div>
      </div>
    </section>
  );
};
