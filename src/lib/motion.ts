import type { Variants } from 'framer-motion'

// Editorial entrance animations
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

export const splitLineReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const clipPathWipe: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

// Parallax utilities
export const parallaxRatios = {
  slow: 0.2,
  medium: 0.4,
  fast: 0.6
}

// Reduced motion check
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Safe motion wrapper
export const withMotion = (variants: Variants) => {
  return prefersReducedMotion() ? {} : variants
}