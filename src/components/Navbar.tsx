"use client";

import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import Link from "next/link";

// import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => <FaLinkedin {...props} />,
  github: (props: IconProps) => <FaGithub {...props} />,
};

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: PencilIcon, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yanarkhan",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ryanarkhan/",
        icon: Icons.linkedin,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ryan.arkhann@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

export function Navbar() {
  const [showDock, setShowDock] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowDock(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        `${showDock ? "translate-y-0" : "translate-y-52"}`,
        "transition-all duration-500 fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
        "flex flex-col items-center justify-center"
      )}
    >
      <TooltipProvider>
        <Dock
          direction="middle"
          className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-background border border-muted rounded-2xl shadow-xl"
        >
          {/* Menu utama */}
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 sm:size-11 md:size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4 sm:size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* Separator */}
          <Separator orientation="vertical" className="h-6 sm:h-7 mx-1" />

          {/* Social media */}
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 sm:size-11 md:size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-4 sm:size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          {/* <Separator orientation="vertical" className="h-6 sm:h-7 mx-1" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className="rounded-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon> */}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
