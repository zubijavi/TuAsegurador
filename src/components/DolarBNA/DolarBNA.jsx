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
    <div className="z-50 w-full bg-black text-white h-8 flex items-center justify-center border-b border-gray-800 shadow-md">

      <div className="flex items-center justify-center gap-8">

        {dolar.map((item, index) => (

          <div 
            key={index} 
            className="flex items-center gap-3"
          >

            <span className="text-xs font-bold text-gray-400 uppercase">
              {item.nombre}
            </span>


            <div className="flex items-center gap-2 text-sm font-mono">

              <span className="text-[10px] text-gray-500 uppercase">
                Compra:
              </span>

              <span className="text-green-400">
                ${item.compra}
              </span>


              <span className="text-[10px] text-gray-500 uppercase ml-2">
                Venta:
              </span>

              <span className="text-blue-400">
                ${item.venta}
              </span>

            </div>


            {index < dolar.length - 1 && (
              <span className="text-gray-600">
                
              </span>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}