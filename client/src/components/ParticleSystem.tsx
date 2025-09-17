import { useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  duration: number;
  delay: number;
}

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const createParticle = () => {
      const particle: Particle = {
        id: nextIdRef.current++,
        x: Math.random() * 100,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      };

      particlesRef.current.push(particle);

      // Remove particle after animation
      setTimeout(() => {
        particlesRef.current = particlesRef.current.filter(p => p.id !== particle.id);
      }, (particle.duration + particle.delay) * 1000);

      return particle;
    };

    // Create initial particles
    for (let i = 0; i < 9; i++) {
      createParticle();
    }

    const interval = setInterval(() => {
      if (particlesRef.current.length < 15) {
        createParticle();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            "--duration": `${particle.duration}s`,
            "--delay": `${particle.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
