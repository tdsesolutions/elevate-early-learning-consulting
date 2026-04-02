// Refined animation system - varied animations per section

export const easeOut = [0.25, 0.46, 0.45, 0.94] as const;
export const easeInOut = [0.42, 0, 0.58, 1] as const;
export const easeSpring = { type: "spring", stiffness: 100, damping: 15 };

// Hero - staggered headline reveal
export const heroTextReveal = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  },
  child: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  },
};

// Standard fade up - for general content
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut },
};

// Fade in with scale - for cards
export const fadeInScale = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.5, ease: easeOut },
};

// Slide in from left - for images
export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: easeOut },
};

// Slide in from right - for content
export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: easeOut },
};

// Float animation - for hero visual
export const floatAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// Subtle pulse - for CTAs
export const subtlePulse = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Stagger container - for grids
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Card stagger - varied timing
export const cardStagger = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  },
};

// Viewport config
export const viewportConfig = {
  once: true,
  margin: "-80px" as const,
};

// Navbar underline slide
export const underlineSlide = {
  layoutId: "navbar-underline",
  transition: { type: "spring", stiffness: 400, damping: 30 },
};

// Hover lift for cards
export const hoverLift = {
  whileHover: {
    y: -8,
    transition: { duration: 0.3, ease: easeOut },
  },
};

// Glow effect on hover
export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(45, 212, 191, 0.15)",
    transition: { duration: 0.3 },
  },
};
