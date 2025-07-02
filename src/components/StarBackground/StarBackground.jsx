import { useEffect, useState } from "react";

export function StarBackground() {
  const [stars, setStars]     = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const onResize = () => generateStars();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function generateStars() {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      size:  Math.random() * 3 + 1,
      x:     Math.random() * 100,
      y:     Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 4 + 2,
    }));
    setStars(newStars);
  }

  function generateMeteors() {
    const newMeteors = Array.from({ length: 4 }, (_, i) => ({
      id:    i,
      size:  Math.random() * 2 + 1,
      x:     Math.random() * 100,
      y:     Math.random() * 20,
      delay: Math.random() * 15,
      duration: Math.random() * 3 + 3,
    }));
    setMeteors(newMeteors);
  }

  return (
    <div className="star-background">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            width:     `${s.size * 2}px`,
            height:    `${s.size * 2}px`,
            left:      `${s.x}%`,
            top:       `${s.y}%`,
            opacity:   s.opacity,
            animation: `fade-in 0.7s ease-out forwards,
                        pulse-subtle ${s.duration}s ease-in-out infinite`
          }}
        />
      ))}

      {meteors.map(m => (
        <div
          key={m.id}
          className="meteor"
          style={{
            width:     `${m.size * 50}px`,
            height:    `${m.size * 2}px`,
            left:      `${m.x}%`,
            top:       `${m.y}%`,
            animation: `meteor ${m.duration}s ${m.delay}s linear infinite`
          }}
        />
      ))}
    </div>
  );
}
