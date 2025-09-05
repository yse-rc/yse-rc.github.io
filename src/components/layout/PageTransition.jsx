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

  // Variants for the page container - horizontal book-like transition
  const pageVariants = {
    initial: {
      x: '100%', // Start from the right (off-screen)
      opacity: 0,
    },
    in: {
      x: 0, // Slide to center position
      opacity: 1,
    },
    out: {
      x: '-100%', // Slide out to the left
      opacity: 0,
    },
  };

  // Main transition settings - slightly faster for the book-like effect
  const pageTransition = {
    type: 'tween',
    ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smooth book-like feel
    duration: 0.6, // Slightly faster than the original vertical transition
  };

  const sideNavWidth = '18rem'; // Equivalent to pl-72 (288px)
  const headerHeight = '80px'; // Match the header height from App.jsx

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
        top: isAnimating ? headerHeight : undefined, // Start from header height, not full viewport
        left: isAnimating && !isMobile ? sideNavWidth : 0,
        width: isAnimating && !isMobile ? `calc(100% - ${sideNavWidth})` : '100%',
        height: isAnimating ? `calc(100vh - ${headerHeight})` : 'auto', // Constrain to content area height
        minHeight: isAnimating ? 'unset' : '100vh', // Remove minHeight during animation
        background: 'transparent',
        transformOrigin: 'center center',
        zIndex: isAnimating ? 20 : 'auto',
        overflow: isAnimating ? 'hidden' : 'visible', // Prevent content from spilling during animation
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

/*
HORIZONTAL BOOK-LIKE PAGE TRANSITION:
- Changed from vertical (y) to horizontal (x) animations
- New pages slide in from the right (x: '100%' -> x: 0)
- Old pages slide out to the left (x: 0 -> x: '-100%')
- Reduced duration slightly (0.6s) for a more responsive book-like feel
- Maintains all existing functionality for sidebar/header persistence

CONSTRAINED ANIMATION AREA:
- Animation now starts from headerHeight (80px) instead of full viewport top
- Height is constrained to calc(100vh - 80px) during animation to match content area
- Removes minHeight during animation to prevent jarring full-viewport effects
- Added overflow hidden during animation to keep content within bounds

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
- `position: 'fixed'` and `top: headerHeight` are used during animation.
- New pages are scrolled to top on animation complete.
*/ 