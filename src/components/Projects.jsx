import { PROJECTS } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="relative h-full w-full bg-slate-950 py-20">
      {/* Grid BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-16 text-center text-4xl font-bold tracking-wide text-white"
        id="projects"
      >
        My Projects
      </motion.h2>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md hover:border-indigo-500/30 hover:shadow-indigo-500/20 transition-all"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
