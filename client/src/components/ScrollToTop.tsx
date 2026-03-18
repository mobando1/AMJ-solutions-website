import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  const [location] = useLocation();
  const isFirstRender = useRef(true);

  const scrollToHash = useCallback(() => {
    const hash = window.location.hash;
    if (!hash) return false;
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
    return false;
  }, []);

  const retryScrollToHash = useCallback(() => {
    if (!scrollToHash()) {
      const delays = [100, 300, 600, 1000, 1500];
      delays.forEach((delay) => {
        setTimeout(() => scrollToHash(), delay);
      });
    }
  }, [scrollToHash]);

  // Handle hash on initial page load (full reload via <a> tags)
  useEffect(() => {
    if (window.location.hash) {
      retryScrollToHash();
    }
  }, []);

  // Handle route changes within SPA
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.location.hash) {
      retryScrollToHash();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
