import {
  BrainCircuit,
  Trophy,
  Music4,
  Lightbulb,
} from "lucide-react";

export default function BeyondCoding() {
  const interests = [
    {
      icon: (
        <BrainCircuit
          size={42}
          className="text-emerald-400"
        />
      ),
      title: "Problem Solving",
      desc:
        "I enjoy breaking down complex challenges into structured solutions through algorithms, logical thinking, and continuous practice.",
    },

    {
      icon: (
        <Trophy
          size={42}
          className="text-amber-400"
        />
      ),
      title: "Chess",
      desc:
        "Chess strengthens my strategic thinking, patience, and decision-making skills, helping me approach problems from multiple perspectives.",
    },

    {
      icon: (
        <Music4
          size={42}
          className="text-pink-400"
        />
      ),
      title: "Music",
      desc:
        "Music helps me stay creative, focused, and energized while learning, coding, and working on new ideas.",
    },

    {
      icon: (
        <Lightbulb
          size={42}
          className="text-cyan-400"
        />
      ),
      title: "Innovation",
      desc:
        "I enjoy exploring emerging technologies and transforming ideas into practical solutions that create real-world value.",
    },
  ];

  return (
    <section className="section">
      <div className="text-center mb-16">
        <p className="text-emerald-400 uppercase tracking-[4px] mb-4">
          Beyond Technology
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          What Drives Me
        </h2>

        <p className="text-zinc-400 mt-4 max-w-3xl mx-auto">
          Beyond academics and development, these
          interests shape the way I think, learn,
          and create solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {interests.map((item) => (
          <div
            key={item.title}
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
            "
          >
            <div className="mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p
              className="
              mt-4
              text-zinc-400
              leading-relaxed
              "
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}