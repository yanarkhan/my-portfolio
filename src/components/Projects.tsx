import { portfolioProjects } from "@/data";
import { ArrowUp, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./elements/SectionHeader";
import { Card } from "./elements/Card";

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Projects"
          title=" Featured Projects"
          description="See how i transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIdx) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${projectIdx * 40}px)`
              }}
            >
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
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
