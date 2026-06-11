import { motion } from "framer-motion";

import {
  skills,
} from "../data/portfolioData";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      data: skills.frontend,
    },
    {
      title: "Backend",
      data: skills.backend,
    },
    {
      title: "Database",
      data: skills.database,
    },
    {
      title: "Core CS",
      data: skills.core,
    },
    {
      title: "Tools",
      data: skills.tools,
    },
  ];

  return (
    <section
      id="skills"
      className="section"
    >
      <h2
        className="
        text-center
        text-4xl
        font-bold
        mb-16
        "
      >
        Skills
      </h2>

      <div
        className="
        grid
        md:grid-cols-2
        gap-8
        "
      >
        {categories.map(
          (category, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
              glass
              p-8
              rounded-3xl
              "
            >
              <h3
                className="
                text-2xl
                font-semibold
                mb-6
                "
              >
                {category.title}
              </h3>

              <div
                className="
                flex
                flex-wrap
                gap-3
                "
              >
                {category.data.map(
                  (skill) => (
                    <span
                      key={skill}
                      className="
                      bg-white/10
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}