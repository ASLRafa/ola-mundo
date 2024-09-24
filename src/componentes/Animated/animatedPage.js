import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const animationsPost = {
  initial: { opacity: 0, y: -100, scale: 0 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -100 },
};

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedPagePost({ children }) {
  return (
    <motion.div
      variants={animationsPost}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
