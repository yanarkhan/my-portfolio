import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
            Let's work together
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-gray-500 dark:text-gray-400">
            If you are interested in building a project together or if you have
            any questions, feel free to contact me.
          </p>

          <Link
            href="mailto:ryanarkhan19@gmail.com"
            className="inline-block mt-8"
          >
            <InteractiveHoverButton className="mt-8">
              Get in touch
            </InteractiveHoverButton>
          </Link>
        </div>

        <div className="mt-16 text-center border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &#169; All Rights Reserved By Ryan Arkhan 🚀
          </p>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <Link
                href="https://github.com/yanarkhan"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:opacity-75 dark:text-gray-200"
              >
                <Github className="size-6" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/ryanarkhan/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:opacity-75 dark:text-gray-200"
              >
                <Linkedin className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
