import Testimonial from '../Testimonial';

export default function TestimonialExample() {
  return (
    <div className="max-w-2xl p-8">
      <Testimonial
        quote="Ana's strategic counsel during our most challenging crisis was invaluable. Her calm, clear guidance helped us navigate a complex situation with our reputation intact."
        author="Sarah Johnson"
        role="Chief Communications Officer, Fortune 500 Financial Services"
      />
    </div>
  );
}
