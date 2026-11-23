import { useState, useMemo, Fragment } from "react";

const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(Number(value) || 0);

// Limpia la palabra "Auto" del principio del nombre del plan
const formatPlanName = (rawName, fallbackIndex) => {
  if (!rawName) return `Plan ${fallbackIndex + 1}`;
  return rawName.replace(/^auto[\s-]*/i, "").trim();
};

export default function ResultadosCotizacion({ quoteData, onBack, onContinue }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [expandedPlan, setExpandedPlan] = useState(null);

  // Filtrar cobertura "garage" y ordenar del más barato al más caro por mes
  const plans = useMemo(() => {
    const rawPlans = quoteData?.plans || [];
    return rawPlans
      .filter((plan) => {
        const name = (plan.module?.coverageName || "").toLowerCase();
        return !name.includes("garage");
      })
      .sort(
        (a, b) =>
          (Number(a.quotaPremiumMonthly) || 0) -
          (Number(b.quotaPremiumMonthly) || 0)
      );
  }, [quoteData]);

  // Identificar el precio más bajo para destacarlo como referencia
  const lowestPrice = plans.length > 0 ? Number(plans[0].quotaPremiumMonthly) : null;

  const vehicleTitle = [
    quoteData?.year,
    quoteData?.brand,
    quoteData?.model,
    quoteData?.vehicleVersion,
  ]
    .filter(Boolean)
    .join(" ");

  const getDeductible = (plan) => {
    const name = plan.module?.coverageName || "";
    const match = name.match(/c\/deduc\.\s*(\$[\d.]+)/i);
    return match ? match[1] : null;
  };

  const getCoverages = (plan) => {
    return (plan.details || []).filter(
      (detail) => detail.chargetype === "Cobertura"
    );
  };

  return (
    <main className="min-h-screen bg-slate-50/80 px-4 pb-28 pt-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Navegación superior */}
        <button
          onClick={onBack}
          className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al cotizador
        </button>

        {/* Encabezado y Resumen del Vehículo */}
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                Cotización lista
              </span>
              <span className="text-xs font-medium text-slate-400">•</span>
              <span className="text-xs font-medium text-slate-500">
                {plans.length} {plans.length === 1 ? "opción disponible" : "opciones disponibles"} (ordenadas de menor a mayor precio)
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {vehicleTitle || "Planes disponibles"}
            </h1>
            {plans.length > 0 && (
              <p className="mt-2 text-sm text-slate-600">
                Suma asegurada:{" "}
                <strong className="font-bold text-slate-900">
                  {formatPrice(plans[0].vehicleInsuredSum)}
                </strong>
              </p>
            )}
          </div>

          {quoteData?.postalCode && (
            <div className="flex items-center gap-3 self-start rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/60 md:self-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100/70 text-blue-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Zona de riesgo
                </p>
                <p className="text-sm font-bold text-slate-800">
                  CP {quoteData.postalCode}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Tabla Comparativa de Planes */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4">Plan / Cobertura</th>
                  <th className="px-6 py-4">Franquicia</th>
                  <th className="px-6 py-4">Cuota Mensual</th>
                  <th className="px-6 py-4 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {plans.map((plan, index) => {
                  const name = formatPlanName(plan.module?.coverageName, index);
                  const deductible = getDeductible(plan);
                  const coverages = getCoverages(plan);
                  const isSelected =
                    selectedPlan?.module?.coverageCode === plan.module?.coverageCode;
                  const isExpanded = expandedPlan === index;
                  const isCheapest = Number(plan.quotaPremiumMonthly) === lowestPrice;

                  return (
                    <Fragment key={`${plan.module?.coverageCode}-${index}`}>
                      <tr
                        className={`transition-colors ${isSelected ? "bg-blue-50/60" : "hover:bg-slate-50/50"
                          }`}
                      >
                        {/* Nombre y Coberturas */}
                        <td className="px-6 py-5 align-middle">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                Sancor Seguros
                              </span>
                              {isCheapest && (
                                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                  Más económico
                                </span>
                              )}
                              {deductible && (
                                <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-800 ring-1 ring-inset ring-amber-800/10">
                                  Con franquicia
                                </span>
                              )}
                            </div>
                            <span className="text-base font-bold text-slate-900">
                              {name}
                            </span>
                            <button
                              type="button"
                              onClick={() => setExpandedPlan(isExpanded ? null : index)}
                              className="mt-1 inline-flex items-center gap-1.5 text-left text-xs font-semibold text-blue-700 hover:text-blue-900"
                            >
                              <span>{isExpanded ? "Ocultar coberturas" : "Ver detalle de coberturas"}</span>
                              <svg
                                className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                                  }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                        </td>

                        {/* Franquicia */}
                        <td className="whitespace-nowrap px-6 py-5 align-middle">
                          {deductible ? (
                            <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800">
                              {deductible}
                            </span>
                          ) : (
                            <span className="text-xs font-medium text-slate-400">Sin franquicia</span>
                          )}
                        </td>

                        {/* Cuota Mensual */}
                        <td className="whitespace-nowrap px-6 py-5 align-middle">
                          <div className="flex flex-col">
                            <div className="flex items-baseline gap-1">
                              <span className="text-xl font-extrabold text-slate-900">
                                {formatPrice(
                                  Number(plan.quotaPremiumMonthly) * 0.95 *
                                  (
                                    Number(quoteData.year) >= 2016 ? 0.75 :
                                      Number(quoteData.year) >= 2011 ? 0.78 :
                                        Number(quoteData.year) >= 2006 ? 0.83 :
                                          1
                                  )
                                )}
                              </span>
                              <span className="text-xs font-medium text-slate-400">/mes</span>
                            </div>

                            {Number(quoteData.year) >= 2006 && (
                              <span className="text-xs font-semibold text-green-600">
                                20% de descuento aplicado
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Botón de Selección */}
                        <td className="whitespace-nowrap px-6 py-5 text-center align-middle">
                          <button
                            type="button"
                            onClick={() => setSelectedPlan(isSelected ? null : plan)}
                            className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold shadow-sm transition-all ${isSelected
                              ? "bg-emerald-600 text-white hover:bg-emerald-700"
                              : "bg-slate-900 text-white hover:bg-blue-700"
                              }`}
                          >
                            {isSelected ? (
                              <>
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Seleccionado
                              </>
                            ) : (
                              "Elegir plan"
                            )}
                          </button>
                        </td>
                      </tr>

                      {/* Fila expandida de coberturas */}
                      {isExpanded && (
                        <tr className="border-b border-slate-200 bg-slate-50/70">
                          <td colSpan="4" className="px-6 py-4">
                            <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-inner">
                              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                                Coberturas incluidas en este plan:
                              </p>
                              <ul className="grid grid-cols-1 gap-2.5 text-xs md:grid-cols-2">
                                {coverages.length > 0 ? (
                                  coverages.map((detail, detailIndex) => (
                                    <li
                                      key={detailIndex}
                                      className="flex items-start gap-2 leading-relaxed text-slate-600"
                                    >
                                      <svg
                                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span>{detail.chargeDescription}</span>
                                    </li>
                                  ))
                                ) : (
                                  <li className="col-span-2 text-slate-400">
                                    No hay detalles de cobertura disponibles.
                                  </li>
                                )}
                              </ul>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-400">
          Valores informados por Sancor Seguros al momento de la cotización. Sujetos a verificación técnica.
        </p>
      </div>

      {/* Barra flotante inferior al seleccionar un plan */}
      {selectedPlan && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:flex">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Plan elegido
                </p>
                <p className="text-sm font-bold text-slate-900">
                  {formatPlanName(selectedPlan.module?.coverageName, 0)}{" "}
                  <span className="ml-1 font-extrabold text-blue-700">
                    ({formatPrice(selectedPlan.quotaPremiumMonthly)}/mes)
                  </span>
                </p>
              </div>
            </div>

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => onContinue && onContinue(selectedPlan)}
                className="flex-1 rounded-xl bg-blue-700 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 sm:flex-initial"
              >
                Continuar contratación →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}