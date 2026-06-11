import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
    >
      <div
        className="
        glass
        rounded-3xl
        p-10
        text-center
        "
      >
        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-6 text-slate-300">
          Open to opportunities,
          collaborations, and exciting
          projects.
        </p>

        <div
          className="
          flex
          justify-center
          gap-8
          mt-10
          "
        >
          <a
            href="mailto:sangavisakthivel28062005@gmail.com"
          >
            <FaEnvelope size={35} />
          </a>

          <a
            href="https://github.com/Sangavisakthivel"
            target="_blank"
          >
            <FaGithub size={35} />
          </a>

          <a
            href="https://www.linkedin.com/in/sangavi-s-8ba785298"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </a>
        </div>
      </div>
    </section>
  );
}