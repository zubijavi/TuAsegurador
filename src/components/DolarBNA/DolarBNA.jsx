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
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 text-center border m-10">
      <h2 className="text-xl font-bold mb-4">
        Dólar Oficial BNA
      </h2>

      <div className="flex justify-around text-lg">
        <div>
          <p className="font-semibold text-gray-600">Compra</p>
          <p className="text-green-600 font-bold">
            ${dolar.compra}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-600">Venta</p>
          <p className="text-blue-600 font-bold">
            ${dolar.venta}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Actualizado: {new Date(dolar.actualizado).toLocaleString()}
      </p>
    </div>
  );
}