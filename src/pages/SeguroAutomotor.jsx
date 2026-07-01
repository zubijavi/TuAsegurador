import Cotizador from "../components/Cotizador";

export default function SeguroAutomotor() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

      {/* INFO */}
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Seguro Automotor
        </h1>

        <p className="text-gray-600">
          Coberturas adaptadas a tu vehículo.
        </p>
      </div>

      {/* FORMULARIO */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Cotizá tu seguro
        </h2>

        <Cotizador type="auto" />

        <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg">
          Enviar solicitud
        </button>
      </div>

    </main>
  );
}