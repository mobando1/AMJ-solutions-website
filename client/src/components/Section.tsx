interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function Section({ children, className = '', containerClassName = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className={`mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
