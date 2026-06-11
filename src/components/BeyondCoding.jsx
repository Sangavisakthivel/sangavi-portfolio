export default function BeyondCoding() {
  const interests = [
    {
      icon: "♟",
      title: "Chess",
      desc:
        "Enjoy strategic thinking and problem solving.",
    },

    {
      icon: "🎵",
      title: "Music",
      desc:
        "Music helps me stay creative and focused.",
    },

    {
      icon: "🚀",
      title: "Learning",
      desc:
        "Always exploring new technologies.",
    },

    {
      icon: "💻",
      title: "Projects",
      desc:
        "Building practical software solutions.",
    },
  ];

  return (
    <section className="section">
      <h2 className="text-center text-4xl font-bold mb-16">
        Beyond Coding
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {interests.map((item) => (
          <div
            key={item.title}
            className="
            glass
            rounded-3xl
            p-8
            "
          >
            <div className="text-5xl">
              {item.icon}
            </div>

            <h3 className="text-2xl mt-4">
              {item.title}
            </h3>

            <p className="mt-4 text-slate-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}