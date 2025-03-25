import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={`bg-zinc-900 rounded-3xl relative overflow-hidden z-0 pseudo-line p-6 ${
        className || ""
      }`}
      {...other}
    >
      <div className="bg-grain absolute inset-0 -z-10 opacity-5"></div>
      {children}
    </div>
  );
};
