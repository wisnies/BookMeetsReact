import { useCallback, useEffect, useState } from 'react';

const NAVBAR_HIDE_BREAKPOINT = 500;

export const useScrollable = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY < NAVBAR_HIDE_BREAKPOINT) {
      setShowNavbar(true);
    } else if (
      window.scrollY > lastScroll &&
      window.scrollY >= NAVBAR_HIDE_BREAKPOINT
    ) {
      setShowNavbar(false);
      setLastScroll(window.scrollY);
    } else {
      setShowNavbar(true);
      setLastScroll(window.scrollY);
    }
  }, [lastScroll]);

  window.addEventListener('scroll', handleScroll);

  useEffect(() => {
    setLastScroll(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return showNavbar;
};
