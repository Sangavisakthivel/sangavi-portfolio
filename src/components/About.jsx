import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <motion.div
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
        className="
        glass
        rounded-3xl
        p-10
        md:p-14
        "
      >
        <h2
          className="
          text-4xl
          font-bold
          mb-8
          "
        >
          About Me
        </h2>

        <p
          className="
          text-slate-300
          text-lg
          leading-8
          "
        >
          I'm a B.Tech Information Technology
          student at Karpagam College of
          Engineering with a strong interest
          in full stack development and
          software engineering.

          <br />
          <br />

          My journey started with learning
          programming fundamentals and
          gradually expanded into web
          development, databases, modern
          JavaScript frameworks, and AI-powered
          applications.

          <br />
          <br />

          I enjoy solving real-world problems,
          building scalable applications, and
          continuously improving my technical
          skills through projects and hands-on
          learning.
        </p>
      </motion.div>
    </section>
  );
}