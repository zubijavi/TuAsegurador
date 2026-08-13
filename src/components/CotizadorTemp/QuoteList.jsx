import QuoteCard from "./QuoteCard";

export default function QuoteList({ quotes = [], vehicle, location }) {
  if (!quotes.length) return null;

  const nombresPlanes = {
    "Auto Max 3 (RC/IP/IT/RT/RP c/Asistencia)":
      "Resp. Civil + Incendio y Robo Parcial y Total",
    "Auto Premium Max (c/Asistencia)":
      "Terceros Completo Premiun",
  };

  const quotesFiltradas = quotes
    .filter((quote) => {
      if (quote.insurer !== "Sancor Seguros") return false;
      const plan = quote.planName || "";
      return nombresPlanes[plan] || plan.startsWith("Auto Todo Riesgo 4%");
    })
    .map((quote) => {
      let nuevoNombre = quote.planName;
      if (nuevoNombre.startsWith("Auto Todo Riesgo 4%")) {
        nuevoNombre = "Todo Riesgo c/Franquicia 4%";
      } else if (nuevoNombre.startsWith("Auto Todo Riesgo 8%")) {
        nuevoNombre = "Todo Riesgo c/Franquicia 8%";
      } else {
        nuevoNombre = nombresPlanes[nuevoNombre];
      }
      return { ...quote, planName: nuevoNombre };
    });

  return (
    <div className="mt-6">
      <div className="text-sm font-medium text-[#234d6d] mb-3">
        {quotesFiltradas.length} cotizaciones encontradas
      </div>

      <div className="grid gap-4">
        {quotesFiltradas.map((quote, index) => (
          <QuoteCard
            key={quote.id || index}
            quote={quote}
            vehicle={vehicle}
            location={location}
          />
        ))}
      </div>
    </div>
  );
}