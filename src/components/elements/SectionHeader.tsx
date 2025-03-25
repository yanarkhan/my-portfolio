export const SectionHeader = ({
    title,
    eyebrow,
    description,
  }: {
    title: string;
    eyebrow: string;
    description: string;
  }) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold gradient-text tracking-widest">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="max-w-md mx-auto text-center text-white/60 mt-4 md:text-lg lg:text-xl">
        {description}
      </p>
    </>
  );
};
