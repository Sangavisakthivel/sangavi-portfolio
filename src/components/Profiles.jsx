import { FaGithub } from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
} from "react-icons/si";

export default function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      link: "https://github.com/Sangavisakthivel",
      icon: (
        <FaGithub
          size={42}
          className="text-white"
        />
      ),
      description: "Projects & Open Source",
    },

    {
      name: "LeetCode",
      link:
        "https://leetcode.com/u/sangavisakthivel28062005/",
      icon: (
        <SiLeetcode
          size={42}
          className="text-[#FFA116]"
        />
      ),
      description: "DSA & Problem Solving",
    },

    {
      name: "GeeksforGeeks",
      link:
        "https://www.geeksforgeeks.org/profile/sangavisakthi9s7p",
      icon: (
        <SiGeeksforgeeks
          size={42}
          className="text-[#2F8D46]"
        />
      ),
      description: "Interview Preparation",
    },

    {
      name: "CodeChef",
      link:
        "https://www.codechef.com/users/sangavisakthi",
      icon: (
        <SiCodechef
          size={42}
          className="text-[#B58863]"
        />
      ),
      description:
        "Competitive Programming",
    },
  ];

  return (
    <section
      id="profiles"
      className="section"
    >
      <div className="text-center mb-16">
        <p className="text-emerald-400 uppercase tracking-[4px] mb-4">
          Coding Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Coding Profiles
        </h2>

        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          Consistently improving problem-solving
          skills, exploring algorithms, and
          building real-world projects through
          continuous learning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            className="
            glass
            rounded-3xl
            p-8
            text-center
            border
            border-zinc-800
            hover:border-emerald-500
            hover:-translate-y-2
            transition-all
            duration-300
            group
            "
          >
            <div className="flex justify-center mb-6">
              {profile.icon}
            </div>

            <h3
              className="
              text-xl
              font-semibold
              group-hover:text-emerald-400
              transition
              "
            >
              {profile.name}
            </h3>

            <p
              className="
              text-zinc-500
              text-sm
              mt-3
              leading-relaxed
              "
            >
              {profile.description}
            </p>

            <div
              className="
              mt-6
              text-xs
              uppercase
              tracking-wider
              text-emerald-400
              "
            >
              View Profile →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}