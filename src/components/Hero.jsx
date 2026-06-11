import { motion } from "framer-motion";



import profile from "../assets/profile.jpg";

import {
  personalInfo,
} from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="text-sky-400 mb-4">
            Hello, I'm
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            "
          >
            {personalInfo.name}
          </h1>

          <h2
            className="
            text-xl
            md:text-2xl
            mt-6
            gradient-text
            font-semibold
            "
          >
            {personalInfo.role}
          </h2>

          <p
            className="
            text-slate-300
            mt-8
            text-lg
            leading-relaxed
            max-w-xl
            "
          >
            {personalInfo.tagline}
          </p>

          <div
            className="
            flex
            gap-4
            mt-10
            flex-wrap
            "
          >
            <a
              href="#projects"
              className="
              bg-sky-500
              px-8
              py-4
              rounded-xl
              font-medium
              hover:scale-105
              transition
              "
            >
              View Projects
            </a>

            <a
              href={personalInfo.resume}
              target="_blank"
              className="
              glass
              px-8
              py-4
              rounded-xl
              hover:scale-105
              transition
              "
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          flex
          justify-center
          "
        >
          <div
            className="
            glass
            p-6
            rounded-[30px]
            "
          >
            <img
              src={profile}
              alt="profile"
              className="
              w-[320px]
              h-[420px]
              object-cover
              rounded-[20px]
              "
            />

            <div className="grid grid-cols-2 gap-3 mt-6">



  <div className="bg-zinc-900 rounded-xl p-4">
    <h3 className="text-2xl font-bold text-emerald-400">
      250+
    </h3>
    <p className="text-zinc-400 text-sm">
      Problems Solved
    </p>
  </div>

  <div className="bg-zinc-900 rounded-xl p-4">
    <h3 className="text-2xl font-bold text-yellow-400">
      8.3
    </h3>
    <p className="text-zinc-400 text-sm">
      CGPA
    </p>
  </div>

  <div className="bg-zinc-900 rounded-xl p-4">
    <h3 className="text-2xl font-bold text-emerald-400">
      5+
    </h3>
    <p className="text-zinc-400 text-sm">
      Projects
    </p>
  </div>

  <div className="bg-zinc-900 rounded-xl p-4">
    <h3 className="text-2xl font-bold text-yellow-400">
      2027
    </h3>
    <p className="text-zinc-400 text-sm">
      Graduate
    </p>
  </div>

</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}