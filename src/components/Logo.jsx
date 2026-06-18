import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const Logo3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    if (isMobile) return; // disable on mobile

    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / rect.width - 0.5) * 100;
    const yPct = (mouseY / rect.height - 0.5) * 100;

    x.set(xPct);
    y.set(yPct);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to="/">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className="perspective-[800px] flex items-center justify-center"
      >
        <motion.span
          style={!isMobile ? { rotateX, rotateY } : {}}
          className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl 
            font-serif inline-block 
            bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 
            bg-clip-text text-transparent
            transition-all duration-300
          "
          animate={{
            y: [0, -6, 0], // floating animation
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          URL Shortener
        </motion.span>
      </div>
    </Link>
  );
};

export default Logo3D;