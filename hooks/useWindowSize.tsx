'use client';
import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (window) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleWindowResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      const handleScrollDown = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('resize', handleWindowResize);
      window.addEventListener('scroll', handleScrollDown);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
        window.removeEventListener('scroll', handleScrollDown);
      };
    }
  }, []);

  return { windowSize, scrollY };
}
