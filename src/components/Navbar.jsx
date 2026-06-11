import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-4
      left-1/2
      -translate-x-1/2
      z-50
      glass
      px-8
      py-4
      rounded-full
      hidden
      md:flex
      gap-8
      "
    >
      {[
        "home",
        "about",
        "journey",
        "skills",
        "projects",
        "profiles",
        "contact",
      ].map((item) => (
        <Link
          key={item}
          to={item}
          smooth={true}
          duration={500}
          className="
          cursor-pointer
          hover:text-sky-400
          transition
          "
        >
          {item.charAt(0).toUpperCase() +
            item.slice(1)}
        </Link>
      ))}

      <a
        href={personalInfo.resume}
        target="_blank"
        className="
        text-sky-400
        font-medium
        "
      >
        Resume
      </a>
    </nav>
  );
}