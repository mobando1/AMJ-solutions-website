import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollToHash = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try immediately, then retry with increasing delays for lazy-loaded pages
      if (!scrollToHash()) {
        const delays = [100, 300, 600, 1000, 1500];
        delays.forEach((delay) => {
          setTimeout(() => scrollToHash(), delay);
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
