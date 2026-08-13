export default function Ticket({ year, brand, model, version, location }) {

    if (!version) return null;

    return (
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-slate-200/80 px-6 py-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            
            {/* Vehículo: Año • Marca • Modelo Versión (todo en la misma altura/línea) */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-slate-800">
                <span className="bg-blue-50 text-blue-950 px-2.5 py-0.5 rounded-md font-extrabold text-xs tracking-wide">
                    {year}
                </span>
                <span className="uppercase">{brand}</span>
                <span className="text-slate-300">•</span>
                <span className="uppercase text-blue-950">{model}</span>
                <span className="text-slate-600 font-medium normal-case">
                    {version}
                </span>
            </div>

            {/* Localidad al mismo nivel a la derecha */}
            {location && (
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 flex-shrink-0">
                    <span className="text-base leading-none">📍</span>
                    <span>
                        <strong className="text-slate-700">{location.localidad}</strong>
                        {location.provincia ? `, ${location.provincia}` : ""}
                    </span>
                </div>
            )}

        </div>
    );
}