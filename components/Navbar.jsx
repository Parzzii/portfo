import { useEffect, useState } from "react"; // 🧠 Let us remember if menu is open (on mobile)
import Link from "next/link"; // 🧩 Special link for jumping between pages in Next.js
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useInView } from "framer-motion";

// 🧭 For detecting which page we are on

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 🪁 true = show mobile menu, false = hide it
  const router = useRouter(); // ✅ correct spot
  const [darkMode, setDarkMode] = useState(false); // 🌙 Dark mode state
  const [active, setActive] = useState("home"); // 📝 Active section state

  const sections = ["home", "about", "skills", "experience", "projects", "contact", "Resume"]; // 📚 List of sections to track

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 w-full z-50">
      <div className="relative w-full flex items-center justify-between px-4 max-w-7xl mx-auto h-16">
        {/* 🏷 Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">Ritik Hedaoo</Link>
        </div>

        {/* 🖥️ Center pill navbar (desktop) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="relative flex items-center gap-2 bg-white border border-black rounded-full px-2 py-1 shadow-md">
            {sections.map((section) => {
              const isActive = active === section.toLowerCase();
              const isResume = section.toLowerCase() === "resume";

              return (
                <a key={section} href={isResume ? "/Ritik_Hedaoo_Frontend.pdf" : `#${section}`} {...(isResume ? { download: true } : {})} className="relative px-4 py-1 rounded-full text-sm font-semibold">
                  {/* Black pill animation only if not Resume */}
                  {!isResume && isActive && <motion.div layoutId="highlight" className="absolute inset-0 bg-black rounded-full z-0" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                  <span className={`relative z-10 ${!isResume && isActive ? "text-white" : "text-black"}`}>{section.toUpperCase()}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* 🌘 Dark mode + Hamburger (mobile right) */}
        <div className="flex items-center gap-3">
          {/* Toggle Dark Mode */}
          <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm text-black dark:text-white">
            {darkMode ? "🌙 Dark" : "🌞 Light"}
          </button>

          {/* 📱 Hamburger for mobile */}
          <div className="md:hidden flex-1 flex justify-end">
            <button onClick={() => setIsOpen(!isOpen)} className="relative w-8 h-8">
              {/* Top Bar */}
              <span
                className={`absolute left-1/2 top-2 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out origin-center
        ${isOpen ? "rotate-45 translate-x-[-50%] translate-y-[6px]" : "translate-x-[-50%]"}
      `}
              ></span>

              {/* Middle Bar */}
              <span
                className={`absolute left-1/2 top-1/2 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out origin-center
        ${isOpen ? "opacity-0" : "translate-x-[-50%] translate-y-[-50%]"}
      `}
              ></span>

              {/* Bottom Bar */}
              <span
                className={`absolute left-1/2 bottom-2 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out origin-center
        ${isOpen ? "-rotate-45 translate-x-[-50%] -translate-y-[6px]" : "translate-x-[-50%]"}
      `}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Dropdown menu (only mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800 shadow-md">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block text-gray-700 dark:text-white font-medium"
                onClick={() => setIsOpen(false)} // close dropdown when clicked
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
