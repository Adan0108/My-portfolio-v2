import React, { useRef, useEffect, useState } from 'react';
import styles from './GhostGame.module.css';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 300;
const SKILLS = ['JavaScript','React','Node.js','Express','MongoDB'];

function initGhosts() {
  return SKILLS.map(skill => ({
    x: Math.random() * (CANVAS_WIDTH - 60) + 30,
    y: Math.random() * (CANVAS_HEIGHT - 60) + 30,
    dx: (Math.random() * 1 + 0.5) * (Math.random()<0.5 ? -1 : 1),
    dy: (Math.random() * 1 + 0.5) * (Math.random()<0.5 ? -1 : 1),
    r: 30,
    skill
  }));
}

export const GhostGame = () => {
  const canvasRef = useRef(null);
  const ghostsRef = useRef(initGhosts());
  const [caughtSkills, setCaughtSkills] = useState([]);
  const [auraPos, setAuraPos] = useState(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    let rafId;
    const loop = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ghostsRef.current.forEach(g => {
        // Draw ghost
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.r, Math.PI, 0);
        ctx.lineTo(g.x + g.r, g.y + g.r);
        ctx.quadraticCurveTo(g.x, g.y + g.r * 1.5, g.x - g.r, g.y + g.r);
        ctx.closePath();
        ctx.fill();
        // Eyes
        ctx.fillStyle = 'black';
        [-g.r/3, g.r/3].forEach(off => {
          ctx.beginPath();
          ctx.arc(g.x + off, g.y - g.r/3, g.r/6, 0, 2 * Math.PI);
          ctx.fill();
        });
        // Move
        g.x += g.dx;
        g.y += g.dy;
        if (g.x < g.r || g.x > CANVAS_WIDTH - g.r) g.dx *= -1;
        if (g.y < g.r || g.y > CANVAS_HEIGHT - g.r) g.dy *= -1;
      });
      rafId = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleClick = e => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    // translate mouse coords to canvas space
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const scaleX = CANVAS_WIDTH / rect.width;
    const scaleY = CANVAS_HEIGHT / rect.height;
    const cx = mx * scaleX;
    const cy = my * scaleY;

    const idx = ghostsRef.current.findIndex(g => Math.hypot(cx - g.x, cy - g.y) < g.r);
    if (idx !== -1) {
      const g = ghostsRef.current[idx];
      setAuraPos({ x: g.x, y: g.y, r: g.r });
      setTimeout(() => setAuraPos(null), 600);
      setCaughtSkills(cs => [...cs, g.skill]);
      ghostsRef.current.splice(idx, 1);
      setTick(t => t + 1);
    }
  };

  const reset = () => {
    ghostsRef.current = initGhosts();
    setCaughtSkills([]);
    setAuraPos(null);
    setTick(t => t + 1);
  };

  const allCaught = ghostsRef.current.length === 0;

  return (
    <section className={styles.container} id="ghost-game">
      <h2>Catch the Ghosts!</h2>
      <div className={styles.gameArea}>
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className={styles.canvas}
          onClick={handleClick}
        />
        {auraPos && (
          <div
            className={styles.aura}
            style={{
              top:  auraPos.y - auraPos.r,
              left: auraPos.x - auraPos.r,
              width:  auraPos.r * 2,
              height: auraPos.r * 2
            }}
          />
        )}
        {allCaught && (
          <div className={styles.promptOverlay}>
            <p>All ghosts caught! Do you want to restart?</p>
            <button className={styles.resetBtn} onClick={reset}>
              Restart
            </button>
          </div>
        )}
        <div className={styles.skillList}>
          <h3>Skills Caught</h3>
          <ul>
            {caughtSkills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};
