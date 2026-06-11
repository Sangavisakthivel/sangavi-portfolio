import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={28} />,
      title: "Email",
      value:
        "sangavisakthivel28062005@gmail.com",
      link:
        "mailto:sangavisakthivel28062005@gmail.com",
    },

    {
      icon: <FaGithub size={28} />,
      title: "GitHub",
      value: "@Sangavisakthivel",
      link:
        "https://github.com/Sangavisakthivel",
    },

    {
      icon: <FaLinkedin size={28} />,
      title: "LinkedIn",
      value: "Connect with me",
      link:
        "https://www.linkedin.com/in/sangavi-s-8ba785298",
    },
  ];

  return (
    <section
      id="contact"
      className="section"
    >
      <div className="text-center mb-16">
        <p className="text-emerald-400 uppercase tracking-[4px] mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Let's Build Something Great
        </h2>

        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          Whether it's an internship,
          collaboration, project idea, or
          simply a conversation about
          technology, I'd love to hear from
          you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {contacts.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="
            glass
            rounded-3xl
            p-8
            border
            border-zinc-800
            hover:border-emerald-500
            hover:-translate-y-2
            transition-all
            duration-300
            text-center
            "
          >
            <div className="flex justify-center mb-5 text-emerald-400">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-3">
              {item.value}
            </p>
          </a>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="mailto:sangavisakthivel28062005@gmail.com"
          className="
          inline-block
          px-8
          py-4
          rounded-2xl
          bg-emerald-500
          text-black
          font-semibold
          hover:scale-105
          transition
          "
        >
          Start a Conversation →
        </a>
      </div>
    </section>
  );
}