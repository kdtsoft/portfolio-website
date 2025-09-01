import { EXPERIENCES } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="pb-16">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold tracking-wide text-white"
        id="experience"
      >
        Experience
      </motion.h2>

      {/* Experience List */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap items-start gap-6 lg:justify-center"
          >
            {/* Year Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm font-medium uppercase text-stone-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Role, Company, Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h3 className="mb-2 text-lg font-semibold text-stone-100">
                {experience.role}{" "}
                <span className="text-sm font-normal text-stone-400">
                  - {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400 leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-lg bg-stone-800 px-3 py-1 text-sm font-medium text-stone-300 shadow-md transition hover:bg-stone-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
