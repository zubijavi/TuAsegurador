import { useEffect, useState } from "react";

export default function DolarBNA() {
  const [dolar, setDolar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const response = await fetch("/api/dolar-bna");
        if (!response.ok) throw new Error("Error al obtener datos");

        const data = await response.json();
        setDolar(data);
      } catch (err) {
        setError("No se pudo cargar la cotización");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDolar();
  }, []);

  if (loading) return <p className="text-center">Cargando cotización...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

return (
  <div className="z-50 w-full bg-black text-white h-6 flex items-center overflow-hidden border-b border-gray-800 shadow-md">
    {/* Contenedor de la animación */}
    <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
      {/* Duplicamos el array para que el bucle sea infinito y no queden espacios vacíos */}
      {[...dolar, ...dolar].map((item, index) => (
        <div key={index} className="flex items-center mx-2 gap-4 group">
          <span className="text-xs font-bold text-gray-400 group-hover:text-yellow-400 transition-colors uppercase">
            Dólar {item.origen}
          </span>
          
          <div className="flex gap-4 text-sm font-mono">
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gray-500 uppercase">Comp:</span>
              <span className="text-green-400">${item.compra}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gray-500 uppercase">Vent:</span>
              <span className="text-blue-400">${item.venta}</span>
            </div>
          </div>
          
          {/* Separador visual entre cotizaciones */}
          <span>|</span>
        </div>
      ))}
    </div>
  </div>
);
}