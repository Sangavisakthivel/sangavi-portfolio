import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current =
        window.scrollY;

      const percentage =
        (current / totalHeight) * 100;

      setProgress(percentage);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      h-[3px]
      bg-sky-400
      z-[999]
      "
      style={{
        width: `${progress}%`,
      }}
    />
  );
}