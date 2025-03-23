import { portfolioProjects } from "@/data";
import { ArrowUp, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold gradient-text tracking-widest">
            My Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="max-w-md mx-auto text-center text-white/60 mt-4 md:text-lg lg:text-xl">
          See how i transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 px-8 pt-8 rounded-3xl relative overflow-hidden z-0 pseudo-line md:px-10 md:pt-12 lg:px-20 lg:pt-16"
            >
              <div className="bg-grain absolute inset-0 -z-10 opacity-5"></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="uppercase font-bold gradient-text tracking-widest text-sm inline-flex gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6 text-emerald-400" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-white w-full h-12 font-semibold text-gray-950 inline-flex items-center justify-center gap-2 mt-8 px-6 rounded-xl md:w-auto">
                      <span>Visit Live Demo</span>
                      <ArrowUp className="size-5 md:size-6" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 rounded-t-xl md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
