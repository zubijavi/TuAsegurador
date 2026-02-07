import { useState, useEffect } from "react";
import auto from "../../assets/auto.jpg";
import girasol from "../../assets/Girasol.jpg";

const slides = [
  {
    image: auto,
    badge: "Auto Insurance",
    title: "Protegé tu auto",
    highlight: "al mejor precio",
    description: "Cobertura total contra robo, incendio y terceros.",
    button: "Cotizar auto"
  },
  {
    image: girasol,
    badge: "Agro Insurance",
    title: "Protegé tu cultivo",
    highlight: "todo el año",
    description: "Seguros agrícolas adaptados a cada campaña.",
    button: "Cotizar agro"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // autoplay con fade
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % slides.length);
      setFade(true);
    }, 400);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent(prev => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 400);
  };

  return (
    <main className="relative min-h-[70vh] md:min-h-[60vh] w-full flex items-center py-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slides[current].image})`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full px-6 lg:px-32 max-w-7xl transition-all duration-700 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="inline-block py-1 px-3 bg-primary/20 text-white border border-primary/30 rounded-full text-xs font-bold mb-6">
          {slides[current].badge}
        </span>

        <h2 className="text-5xl md:text-7xl text-white leading-tight mb-6">
          {slides[current].title}
          <br />
          <span className="text-primary italic">
            {slides[current].highlight}
          </span>
        </h2>

        <p className="text-slate-200 text-lg max-w-lg mb-10">
          {slides[current].description}
        </p>

        <div className="flex gap-4">
          <button className="min-w-40 h-14 bg-white/10 border border-white/20 text-white rounded-lg font-bold hover:bg-white/20 transition">
            {slides[current].button}
          </button>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-20">
        <button
          onClick={prev}
          className="size-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="size-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          ›
        </button>
      </div>
    </main>
  );
};

export default Hero;