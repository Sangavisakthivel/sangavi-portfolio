export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">

        <div
          className="
          absolute
          top-20
          left-10
          w-72
          h-72
          rounded-full
          blur-[120px]
          bg-sky-500/20
          animate-pulse
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-10
          w-96
          h-96
          rounded-full
          blur-[140px]
          bg-purple-500/20
          animate-pulse
          "
        />

        <div
          className="
          absolute
          top-1/2
          left-1/2
          w-80
          h-80
          rounded-full
          blur-[130px]
          bg-cyan-500/10
          "
        />

      </div>
    </>
  );
}