import { motion } from "framer-motion";
import { journey } from "../data/portfolioData";

export default function Journey() {
  return (
    <section
      id="journey"
      className="section"
    >
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold">
          From Student to Developer
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          My growth through learning,
          building and continuous improvement.
        </p>
      </div>

      <div className="space-y-10">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              glass
              rounded-3xl
              p-8
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          >
            <div className="flex items-start gap-6">
              <div className="text-5xl">
                {item.icon}
              </div>

              <div>
                <div className="flex items-center gap-4 flex-wrap">
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <span
                    className="
                    px-4
                    py-1
                    rounded-full
                    bg-sky-500/20
                    text-sky-400
                    text-sm
                    "
                  >
                    {item.year}
                  </span>
                </div>

                <p
                  className="
                  mt-4
                  text-slate-300
                  leading-8
                  text-lg
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}