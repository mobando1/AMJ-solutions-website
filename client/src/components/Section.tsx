interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function Section({ children, className = '', containerClassName = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
