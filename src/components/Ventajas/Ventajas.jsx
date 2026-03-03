import { ShieldCheck, Clock, Users, BadgeDollarSign } from "lucide-react";

export default function Ventajas() {
  const ventajas = [
    {
      icon: <ShieldCheck size={40} />,
      titulo: "Cobertura confiable",
      descripcion:
        "Trabajamos con aseguradoras líderes del mercado para brindarte protección real cuando más lo necesitás.",
    },
    {
      icon: <Clock size={40} />,
      titulo: "Atención rápida y personalizada",
      descripcion:
        "Respondemos tus consultas de forma ágil y te acompañamos en todo el proceso, desde la cotización hasta el siniestro.",
    },
    {
      icon: <BadgeDollarSign size={40} />,
      titulo: "Mejor relación precio-calidad",
      descripcion:
        "Buscamos la opción que mejor se adapte a tu presupuesto sin resignar cobertura.",
    },
    {
      icon: <Users size={40} />,
      titulo: "Asesoramiento humano",
      descripcion:
        "No sos un número. Te asesoramos de manera personalizada para que tomes la mejor decisión.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Nos enfocamos en brindarte tranquilidad, respaldo y atención personalizada en cada etapa.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ventajas.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-slate-700 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.titulo}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}