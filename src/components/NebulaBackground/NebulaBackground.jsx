import React, { useEffect, useState } from "react";
import "./NebulaBackground.css";

export default function NebulaBackground() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const colors = [
      "255,20,147",   // magenta
      "75,0,130",     // indigo
      "0,255,255",    // cyan
      "255,223,0"     // gold
    ];
    const count = 20;
    const newClouds = Array.from({ length: count }, (_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 600 + 300;       // blob diameter in px
      const x = Math.random() * 100;                // initial left%
      const y = Math.random() * 100;                // initial top%
      const dx = (Math.random() * 2 - 1) * 50;      // drift X in px
      const dy = (Math.random() * 2 - 1) * 50;      // drift Y in px
      const scaleEnd = 1 + Math.random() * 0.3;     // front/back
      const duration = Math.random() * 60 + 60;     // secs
      const delay = -Math.random() * duration;      // stagger start
      return { id: i, color, size, x, y, dx, dy, scaleEnd, duration, delay };
    });
    setClouds(newClouds);
  }, []);

  return (
    <div className="nebula-bg">
      {clouds.map(c => (
        <div
          key={c.id}
          className="neb-cloud"
          style={{
            "--x-start": `${c.x}%`,
            "--y-start": `${c.y}%`,
            "--x-end":   `calc(${c.x}% + ${c.dx}px)`,
            "--y-end":   `calc(${c.y}% + ${c.dy}px)`,
            "--scale-start": `1`,
            "--scale-end":   `${c.scaleEnd}`,
            "--anim-dur":    `${c.duration}s`,
            "--anim-delay":  `${c.delay}s`,
            "--blob-size":   `${c.size}px`,
            "--blob-color":  c.color,
          }}
        />
      ))}
    </div>
  );
}
