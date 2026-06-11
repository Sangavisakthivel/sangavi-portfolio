import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="text-center text-4xl font-bold mb-20">
        Featured Projects
      </h2>

      <div className="space-y-16">
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
            transition={{ duration: 0.7 }}
            className={`
              glass
              rounded-3xl
              overflow-hidden

              flex
              flex-col

              lg:flex-row

              ${
                index % 2 === 1
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
                min-h-[300px]
                "
              />
            </div>

            <div className="lg:w-1/2 p-10">
              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-6 text-slate-300 leading-8">
                {project.description}
              </p>

              <div className="flex gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  className="
                  bg-sky-500
                  px-6
                  py-3
                  rounded-xl
                  "
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="
                  glass
                  px-6
                  py-3
                  rounded-xl
                  "
                >
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}