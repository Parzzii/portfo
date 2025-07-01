import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function FlipCard({ name }) {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="min-w-[120px] h-10 inline-flex items-center justify-center px-4 py-2 bg-orange-100 dark:bg-orange-700 text-orange-900 dark:text-orange-100 text-sm font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      {name}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <>
      <motion.section id="home" className="flex flex-col items-center justify-center h-[90vh] text-center px-4 bg-gradient-to-b from-white to-blue-100">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="cursor-defaulttext-4xl md:text-6xl font-bold mb-6 flex items-center gap-2">
          <motion.span animate={{ rotate: [0, 20, -10, 20, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }} className="inline-block origin-bottom-left">
            👋
          </motion.span>
          Hi, I'm Ritik Hedaoo
        </motion.h1>
        <TypeAnimation
          sequence={[
            "I build clean, responsive websites.", // Types this
            1000, // Wait 2 seconds
            "I design fast, accessible UIs.", // Then types this
            1000,
            "I love JavaScript and React.", // Then this
            1000,
            "", // Then clear
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="text-lg md:text-xl mb-8 text-center text-orange-700 dark:text-orange-300 font-medium"
        />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 0.5 }}>
          <motion.button
            onClick={() => window.scrollTo({ top: 500, behaviour: "smooth" })}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 12px rgba(255, 165, 0, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            See My Work
          </motion.button>
        </motion.div>
      </motion.section>

      {/* 👇 About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-24 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-900 text-black dark:text-white scroll-mt-24"
      >
        <h2 className="text-4xl font-bold text-center mb-10">👨‍💻 About Me</h2>
        <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-center">
          <p>I'm Ritik Hedaoo, a passionate frontend developer and designer with a knack for building clean, accessible, and performant web experiences. With a strong foundation in JavaScript, React, and modern UI frameworks, I love turning ideas into delightful digital products.</p>
          <p className="mt-6">My journey spans both coding and design, allowing me to bridge the gap between beautiful interfaces and robust functionality. Whether collaborating in agile teams or working solo, I thrive on solving problems and continuously learning new technologies.</p>
          <p className="mt-6">Outside of coding, you'll find me exploring new design trends, contributing to open source, or sketching out UI concepts in Figma. Let's build something amazing together!</p>
        </div>
      </motion.section>

      {/* 👇 Skills Section */}
      <motion.section id="skills" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="px-6 py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
        <h2 className="text-4xl font-bold text-center mb-12">🛠️ Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left items-start perspective">
          {/* Frontend */}
          <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow text-center min-h-[280px] w-full flex flex-col justify-start">
            <h3 className="text-xl font-semibold mb-4">🖥️ Frontend</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <FlipCard name="ReactJS" />
              <FlipCard name="HTML5" />
              <FlipCard name="CSS3" />
              <FlipCard name="TailwindCSS" />
              <FlipCard name="Bootstrap" />
              <FlipCard name="Vue" />
              <FlipCard name="Webpack" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow text-center min-h-[280px] w-full flex flex-col justify-start">
            <h3 className="text-xl font-semibold mb-3">⚙️ Backend</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <FlipCard name="NodeJS" />
              <FlipCard name="Express.js" />
              <FlipCard name="ASP.NET" />
              <FlipCard name="MVC" />
            </div>
          </div>

          {/* Databases */}
          <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow text-center min-h-[280px] w-full flex flex-col justify-start">
            <h3 className="text-xl font-semibold mb-3">💾 Databases</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <FlipCard name="MongoDB" />
              <FlipCard name="MySQL" />
            </div>
          </div>

          {/* Tools  */}
          <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow text-center min-h-[280px] w-full flex flex-col justify-start">
            <h3 className="text-xl font-semibold mb-3">🧰 Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <FlipCard name="GitHub" />
              <FlipCard name="Jest" />
              <FlipCard name="UX Design" />
              <FlipCard name="User Research" />
              <FlipCard name="Wireframing" />
              <FlipCard name="Prototyping" />
              <FlipCard name="Agile Methodologies" />
              <FlipCard name="Vercel" />
              <FlipCard name="Figma" />
              <FlipCard name="Sketch" />
              <FlipCard name="Git" />
              <FlipCard name="Postman" />
            </div>
          </div>
          {/* Concepts */}
          <div className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow text-center min-h-[280px] w-full flex flex-col justify-start">
            <h3 className="text-xl font-semibold mb-3">🧠 Concepts</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <FlipCard name="Agile Methodologies" />
              <FlipCard name="Responsive Design" />
              <FlipCard name="REST APIs" />
              <FlipCard name="Agile" />
              <FlipCard name="Functional Programming" />
              <FlipCard name="Asynchronous Programming" />
              <FlipCard name="Cross Browser Compatibility" />
              <FlipCard name="Accessibility" />
              <FlipCard name="Multi-Tier Architecture" />
              <FlipCard name="Data Security" />
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="scroll-mt-20 px-6 py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 text-black dark:text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-16">💼 Work Experience</h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-12 relative">
          {/* 🧵 Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-transparent dark:from-orange-600" />

          {/* 🔶 Experience 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
            className="relative bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-start backdrop-blur"
          >
            <div className="absolute left-[-1.15rem] top-6 w-4 h-4 bg-orange-500 dark:bg-orange-400 rounded-full shadow-md" />
            <div className="flex-shrink-0 md:w-1/3">
              <span className="inline-block bg-orange-100 dark:bg-orange-700 text-orange-900 dark:text-orange-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">Teaching Assistant</span>
              <div className="text-lg font-semibold">UNC Charlotte</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Jan 2024 – May 2025</div>
            </div>
            <ul className="list-disc ml-6 text-base text-left space-y-2 flex-1">
              <li>Developed course materials and assignments based on Human-Centered Design (HCD) principles, aligning with best practices in user experience and collaboration with design teams.</li>
              <li>Delivered actionable feedback on HCD deliverables, improving project outcomes by 30% and reinforcing user-focused approaches central to frontend development.</li>
              <li>Conducted usability testing workshops that guided students through 10+ prototype refinements, emphasizing accessibility and cross browser compatibility</li>
            </ul>
          </motion.div>

          {/* 🔶 Experience 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
            className="relative bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-start backdrop-blur"
          >
            <div className="absolute left-[-1.15rem] top-6 w-4 h-4 bg-orange-500 dark:bg-orange-400 rounded-full shadow-md" />
            <div className="flex-shrink-0 md:w-1/3">
              <span className="inline-block bg-orange-100 dark:bg-orange-700 text-orange-900 dark:text-orange-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">Jr. Software Engineer</span>
              <div className="text-lg font-semibold">Cognizant Technology Solutions</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Nov 2021 – July 2023</div>
            </div>
            <ul className="list-disc ml-6 text-base text-left space-y-2 flex-1">
              <li>Built RESTful APIs with Node.js and Express for internal tools.</li>
              <li> Engineered web applications using .NET MVC and integrated front-end techniques, enhancing code maintainability by 40% while supporting multi-tier application architecture.</li>
              <li> Optimized backend solutions with MySQL, which improved query performance by 25% and contributed to overall application scalability and reliability.</li>
            </ul>
          </motion.div>

          {/* 🔶 Experience 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0,0,0,0.1)" }}
            className="relative bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-start backdrop-blur"
          >
            <div className="absolute left-[-1.15rem] top-6 w-4 h-4 bg-orange-500 dark:bg-orange-400 rounded-full shadow-md" />
            <div className="flex-shrink-0 md:w-1/3">
              <span className="inline-block bg-orange-100 dark:bg-orange-700 text-orange-900 dark:text-orange-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">Intern</span>
              <div className="text-lg font-semibold">Cognizant Technology Solutions</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Feb 2021 – Aug 2021</div>
            </div>
            <ul className="list-disc ml-6 text-base text-left space-y-2 flex-1">
              <li>Built and maintained web applications using MVC architecture and .NET framework, improving user experience by 25%</li>
              <li>Resolved critical system errors and optimized SQL database integration, increasing reliability by 20%.</li>
              <li>Participated in Agile ceremonies and team development sessions.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="projects" class="px-6 py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white scroll-mt-24">
        <h2 class="text-4xl font-bold text-center mb-16">🚀 Projects</h2>

        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* <!-- 💻 Coding Projects --> */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">🖥️ Coding Projects</h3>
              <a href="https://github.com/Parzzii" target="_blank" className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition">
                GitHub →
              </a>
            </div>

            <div className="space-y-6">
              {/* <!-- Card 1 --> */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition flex items-start justify-between">
                {/* Icon + Text */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="text-base font-semibold text-black dark:text-white mb-1">Trivia Quiz</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Engaging trivia quiz application with real-time collaboration.</p>
                  </div>
                </div>
                {/* Button */}
                <a href="https://github.com/Parzzii/Trivia-Quiz-App" target="_blank" className="ml-4 mt-1 px-4 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-900 transition whitespace-nowrap">
                  View →
                </a>
              </motion.div>

              {/* <!-- Card 2 --> */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(255,165,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative p-6 bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md backdrop-blur hover:shadow-2xl transition flex items-start justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">📝</span>
                  <div>
                    <h4 className="text-lg font-semibold">Notepad</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Interactive note-taking app with rich text editing and collaboration features.</p>
                  </div>
                </div>
                <a href="https://github.com/Parzzii/my-notepad" target="_blank" className="ml-4 mt-1 px-4 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-900 transition whitespace-nowrap self-start">
                  View →
                </a>
              </motion.div>

              {/* <!-- Card 3 --> */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(255,165,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative p-6 bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md backdrop-blur hover:shadow-2xl transition flex items-start justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">🌐</span>
                  <div>
                    <h4 className="text-lg font-semibold">Portfolio Website</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Responsive portfolio built with Framer Motion & Next.js.</p>
                  </div>
                </div>
                <a href="https://github.com/Parzzii/portfolio" target="_blank" className="ml-4 mt-1 px-4 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-900 transition whitespace-nowrap self-start">
                  View →
                </a>
              </motion.div>
            </div>
          </div>

          {/* <!-- 🎨 Figma Projects --> */}

          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">🎨 Figma Projects</h3>
              <a href="https://www.figma.com/@Parzzii" target="_blank" className="px-4 py-2 rounded-full border border-black dark:border-white text-black dark:text-white text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Figma →
              </a>
            </div>

            <div className="space-y-6">
              {/* <!-- Card 1 --> */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition flex items-start justify-between">
                {/* Icon + Text */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="text-base font-semibold text-black dark:text-white mb-1">Mobile UI Concept</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Clean wireframe for a to-do app interface.</p>
                  </div>
                </div>
                {/* Button */}
                <a href="https://www.figma.com/@Parzzii" target="_blank" className="ml-4 mt-1 px-4 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-900 transition whitespace-nowrap">
                  View →
                </a>
              </motion.div>

              {/* <!-- Card 2 --> */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(255,165,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative p-6 bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md backdrop-blur hover:shadow-2xl transition flex items-start justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">🎨</span>
                  <div>
                    <h4 className="text-lg font-semibold">Real-time Prototypes</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Interactive prototypes with Figma.</p>
                  </div>
                </div>
                <a href="https://www.figma.com/@Parzzii" target="_blank" className="ml-4 mt-1 px-4 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-900 transition whitespace-nowrap self-start">
                  View →
                </a>
              </motion.div>

              {/* <!-- Card 3 --> */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(255,165,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative p-6 bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md backdrop-blur hover:shadow-2xl transition flex items-start justify-between"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">🌐</span>
                  <div>
                    <h4 className="text-lg font-semibold">Portfolio Website</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Responsive portfolio built with Framer Motion & Next.js.</p>
                  </div>
                </div>
                <a
                  href="https://www.figma.com/proto/ysjk1Sw0RxipJIdOkhYvsw/Portfolio?node-id=77-133&t=wwabfBxljtzSDP2R-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A5&starting-point-node-id=77%3A133"
                  target="_blank"
                  className="ml-4 mt-1 px-4 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-900 transition whitespace-nowrap self-start"
                >
                  View →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 text-black dark:text-white scroll-mt-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">📫 Get in Touch</h2>

        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* ✉️ Email Card */}
          <motion.a whileHover={{ scale: 1.05 }} href="mailto:ritikhedaoo9@gmail.com" target="_blank" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center">
            <span className="text-3xl mb-2">📧</span>
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">ritikhedaoo9@gmail.com</p>
          </motion.a>

          {/* 🔗 LinkedIn Card */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/ritik-hedaoo"
            target="_blank"
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
          >
            <span className="text-3xl mb-2">🔗</span>
            <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">Ritik Hedaoo</p>
          </motion.a>

          {/* 📄 Resume Download */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/Ritik_Hedaoo_Frontend_Software_Engineer_Graduate.pdf" // Make sure this file is in your public folder
            download
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
          >
            <span className="text-3xl mb-2">📄</span>
            <h3 className="text-lg font-semibold mb-1">Resume</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Download PDF</p>
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
