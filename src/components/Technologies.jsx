import { DiNodejs } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiFlutter, SiGit, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10, rotate: 0 },
  animate: {
    y: [10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  const techStack = [
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express" },
    { icon: <RiReactjsLine className="text-cyan-400" />, name: "React" },
    { icon: <DiNodejs className="text-green-500" />, name: "Node.js" },
    { icon: <TbBrandNextjs className="text-white" />, name: "Next.js" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiGit className="text-orange-500" />, name: "Git" },
    { icon: <FaDartLang className="text-sky-400" />, name: "Dart" },
    { icon: <SiFlutter className="text-sky-400" />, name: "Flutter" },
  ];

  return (
    <div className="pb-24">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-bold tracking-wide text-white"
        id="technologies"
      >
        Technologies
      </motion.h2>

      {/* Tech Icons */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2 + index * 0.2)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-6 backdrop-blur-lg shadow-lg transition-all hover:scale-110 hover:shadow-cyan-500/20 cursor-pointer"
          >
            <div className="text-6xl">{tech.icon}</div>
            <p className="mt-3 text-sm text-stone-300">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
