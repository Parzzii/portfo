import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div className="cursor-ring" animate={{ x: position.x - 16, y: position.y - 16 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />

      {/* Inner Solid Dot */}
      <motion.div className="cursor-dot" animate={{ x: position.x - 4, y: position.y - 4 }} transition={{ type: "spring", stiffness: 500, damping: 40 }} />
    </>
  );
}
