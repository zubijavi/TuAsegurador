import { useEffect, useState } from "react";

export default function DolarBNA() {
  const [dolar, setDolar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const response = await fetch("/api/dolar-bna");

        if (!response.ok) throw new Error("Error al obtener datos");

        const data = await response.json();

        // Filtra solamente dólar blue y dólar oficial BNA
        setDolar(
          data.filter(
            (item) => item.origen === "BLUE" || item.origen === "BNA"
          )
        );

      } catch (err) {
        setError("No se pudo cargar la cotización");
        console.error(err);

      } finally {
        setLoading(false);
      }
    };

    fetchDolar();
  }, []);


  if (loading)
    return <p className="text-center">Cargando cotización...</p>;

  if (error)
    return <p className="text-center text-red-500">{error}</p>;


  return (
    <div className="z-50  bg-gray-800 h-auto flex items-center justify-center border-b border-gray-200 shadow-sm">

      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-80  py-1 overflow-x-auto">

        {dolar.map((item, index) => (
          <div
            key={index}
            className="flex justify-between  w-80  md:min-w-0 "
          >
            {/* Nombre */}
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              {item.nombre === "Dólar oficial (BNA)" ? "Dólar Oficial" : item.nombre}
            </span>
            {/* Valores */}
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium">
              <span className="text-gray-500">Compra:</span>
              <span className="text-green-600">${item.compra}</span>

              <span className="text-gray-500 ml-1 md:ml-2">Venta:</span>
              <span className="text-blue-600">${item.venta}</span>
            </div>

            {/* Separador */}
            {/* {index < dolar.length - 1 && (
          <span className="hidden md:inline text-gray-300">|</span>
        )} */}
          </div>
        ))}

      </div>
    </div>

  );
}