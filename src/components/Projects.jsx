import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="text-center mb-20">
        <p className="text-emerald-400 uppercase tracking-[4px] mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="text-zinc-400 mt-4 max-w-3xl mx-auto">
          A collection of projects that
          showcase my skills in full-stack
          development, problem solving,
          and building practical software
          solutions.
        </p>
      </div>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className={`
              glass
              rounded-3xl
              overflow-hidden
              border
              border-zinc-800
              hover:border-emerald-500
              transition-all
              duration-300

              flex
              flex-col
              lg:flex-row

              ${
                index % 2
                  ? "lg:flex-row-reverse"
                  : ""
              }
            `}
          >
            <div className="lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-full
                object-cover
                min-h-[350px]
                "
              />
            </div>

            <div className="lg:w-1/2 p-10 flex flex-col justify-center">
              <p className="text-emerald-400 text-sm uppercase tracking-wider">
                Project
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {project.title}
              </h3>

              <p className="mt-6 text-zinc-400 leading-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    bg-zinc-900
                    border
                    border-zinc-700
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  bg-emerald-500
                  text-black
                  font-semibold
                  hover:scale-105
                  transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  glass
                  hover:scale-105
                  transition
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}