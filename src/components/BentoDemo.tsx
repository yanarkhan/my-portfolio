import { CalendarIcon, LayersIcon, Share2Icon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { files } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "./elements/AnimatedBeamMultipleOutputDemo";
import { SectionHeader } from "./elements/SectionHeader";

const features = [
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "I automatically save your files as you type.",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: LayersIcon,
    name: "Tech Stack",
    description: "I constanly to improve",
    background: (
      <Marquee
        // pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 flex flex-col items-center justify-center  cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
            )}
          >
            <f.icon className="size-12" />
          </figure>
        ))}
      </Marquee>
    ),
    className: "lg:row-start-2 lg:row-end-4 lg:col-start-3 lg:col-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "Tech Enthusiast",
    description:
      "I prioritize client collaboration, fostering open communication",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-3",
  },
];

export function BentoDemo() {
  return (
    <section className="mt-32 px-4 md:mt-12 md:px-8 lg:p-36">
      <SectionHeader
        eyebrow="What I Do"
        title="Creative Meets Code"
        description="A glance at how I merge design and development into unique experiences."
      />
      <BentoGrid className="lg:grid-rows-3 mt-10 md:mt-20">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
