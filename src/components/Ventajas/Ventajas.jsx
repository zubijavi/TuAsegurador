import { ShieldCheck, Clock, Users, BadgeDollarSign } from "lucide-react";

export default function Ventajas() {
  const ventajas = [
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      titulo: "Cobertura confiable",
      descripcion:
        "Trabajamos con aseguradoras líderes del mercado para brindarte protección real cuando más lo necesitás.",
    },
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      titulo: "Atención rápida y personalizada",
      descripcion:
        "Respondemos tus consultas de forma ágil y te acompañamos en todo el proceso, desde la cotización hasta el siniestro.",
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      titulo: "Mejor relación precio-calidad",
      descripcion:
        "Buscamos la opción que mejor se adapte a tu presupuesto sin resignar cobertura.",
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      titulo: "Asesoramiento humano",
      descripcion:
        "No sos un número. Te asesoramos de manera personalizada para que tomes la mejor decisión.",
    },
  ];

  return (
    <section className="bg-gray-50 py-2 px-2">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-700 mb-2">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-gray-600 p-2 max-w-2xl mx-auto">
          Nos enfocamos en brindarte tranquilidad, respaldo y atención personalizada en cada etapa.
        </p>

        <div className="grid gap-1 grid-cols-4 lg:grid-cols-4">
          {ventajas.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 "
            >
              <div className="text-slate-700 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-sm lg:text-l  mb-3">
                {item.titulo}
              </h3>
              <p className="hidden md:block md:text-sm text-gray-600">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}