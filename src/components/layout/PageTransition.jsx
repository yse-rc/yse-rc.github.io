import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef } from 'react';

const PageTransition = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const motionRef = useRef(null);

  // Disable animations on mobile
  if (isMobile) {
    return <>{children}</>;
  }

  // Variants for the page container
  const pageVariants = {
    initial: {
      y: '100%',
    },
    in: {
      y: 0,
    },
    out: {
      y: '-50%', // Your desired slide distance
      opacity: 0,
      scale: 0.95,
    },
  };

  // Main transition settings
  const pageTransition = {
    type: 'tween',
    ease: [0.43, 0.13, 0.23, 0.96],
    duration: 0.75,
  };

  const sideNavWidth = '15rem'; // Equivalent to pl-60 (240px)

  return (
    <motion.div
      ref={motionRef}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      onAnimationStart={() => {
        if (!isAnimating) {
           setCurrentScrollY(window.scrollY);
        }
        setIsAnimating(true);
      }}
      onAnimationComplete={() => {
        setIsAnimating(false);
        if (motionRef.current && motionRef.current.style.position === 'static') {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
      }}
      style={{
        position: isAnimating ? 'fixed' : 'static',
        top: isAnimating ? -currentScrollY : undefined,
        left: isAnimating && !isMobile ? sideNavWidth : 0,
        width: isAnimating && !isMobile ? `calc(100% - ${sideNavWidth})` : '100%',
        height: 'auto',
        minHeight: '100vh',
        background: 'transparent',
        transformOrigin: 'center center',
        zIndex: isAnimating ? 20 : 'auto',
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

/*
FIXING OVERLAP WITH SIDEBAR/HEADER:
- The `SideNav` was given `z-40`.
- The `Header` already has `z-50`.
- `PageTransition` (when animating and `fixed`) now has `zIndex: 20`.
- Crucially, when `isAnimating` and `!isMobile` (SideNav is visible):
  - `left` is set to `sideNavWidth` ('15rem').
  - `width` is set to `calc(100% - sideNavWidth)`.
This confines the `fixed` animating page to the content area to the right of the SideNav,
preventing it from visually sliding over the SideNav.
It should also naturally be below the Header due to z-index hierarchy.

Scroll jump attempt (from previous iteration, refined):
- `position: 'fixed'` and `top: -currentScrollY` are used during animation.
- New pages are scrolled to top on animation complete.
*/ 