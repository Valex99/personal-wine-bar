import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  bg?: "primary" | "muted" | "secondary" | "accent" | "inverted";
  noPadd?: boolean;
}

const Section = ({
  children,
  className,
  bg,
  noPadd,
  ...props
}: SectionProps) => {
  const bgClass = bg
    ? bg === "inverted"
      ? "bg-foreground text-background"
      : `bg-${bg} text-${bg}-foreground`
    : "bg-background text-foreground";
  const defaultPadding = noPadd ? "" : "py-6 md:py-10 lg:py-20";

  // if (bg === 'primary')
  //   defaultPadding = 'py-8 md:py-12 lg:py-32 my-4 md:my-8 lg:my-16'

  // console.log("🚀 ~ file: section.tsx:13 ~ Section ~ bgClass:", bgClass)
  return (
    <section {...props} className={cn(defaultPadding, bgClass, className)}>
      {children}
    </section>
  );
};
export default Section;
