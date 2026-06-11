import {
  FaGithub,
  FaCode,
} from "react-icons/fa";

export default function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      link:
        "https://github.com/Sangavisakthivel",
      icon: <FaGithub size={40} />,
    },

    {
      name: "LeetCode",
      link:
        "https://leetcode.com/u/sangavisakthivel28062005/",
      icon: <FaCode size={40} />,
    },

    {
      name: "GeeksforGeeks",
      link:
        "https://www.geeksforgeeks.org/profile/sangavisakthi9s7p",
      icon: <FaCode size={40} />,
    },

    {
      name: "CodeChef",
      link:
        "https://www.codechef.com/users/sangavisakthi",
      icon: <FaCode size={40} />,
    },
  ];

  return (
    <section id="profiles" className="section">
      <h2 className="text-center text-4xl font-bold mb-16">
        Coding Profiles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            className="
            glass
            rounded-3xl
            p-8
            text-center
            hover:scale-105
            transition
            "
          >
            <div className="flex justify-center mb-4">
              {profile.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {profile.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}