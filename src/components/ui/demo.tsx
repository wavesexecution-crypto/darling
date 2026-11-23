const VIDEOS = [
  { src: "/assets/v/b.webm", x: 25, width: "20%" },
  { src: "/assets/v/c.webm", x: 50, width: "20%" },
  { src: "/assets/v/d.webm", x: 75, width: "18%" },
];

export default function TiltedGridHeroDemo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {VIDEOS.map((v, i) => (
        <video
          key={i}
          src={v.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute object-contain"
          style={{
            left: `${v.x}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: v.width,
            height: "auto",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      ))}
    </div>
  );
}
