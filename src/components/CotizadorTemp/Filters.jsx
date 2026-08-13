import { useState } from "react";

function CodigoPostalField({ cp, setCp, locations, location, setLocation, selectClass, labelClass }) {

    const [showDropdown, setShowDropdown] = useState(false);

    function limpiar() {
        setLocation(null);
        setCp("");
        setShowDropdown(false);
    }

    return (
        <div className="relative">

            <label className={labelClass}>Código Postal</label>

            {location ? (

                <div
                    className={`${selectClass} flex items-center justify-between cursor-default`}
                >
                    <span className="text-[#111518]">
                        {location.localidad} ({location.provincia})
                    </span>

                    <button
                        type="button"
                        onClick={limpiar}
                        className="text-gray-400 hover:text-[#234d6d] ml-2"
                    >
                        ✕
                    </button>
                </div>

            ) : (

                <input
                    type="text"
                    className={selectClass}
                    value={cp}
                    maxLength={4}
                    placeholder="1001"
                    onChange={e => setCp(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                />

            )}

            {!location && showDropdown && locations.length > 0 && (

                <div className="absolute z-10 left-0 right-0 mt-1 bg-white rounded-lg
                                 border border-[#f0f3f4] shadow-lg max-h-48 overflow-auto">

                    {locations.map((l, i) => (
                        <button
                            key={i}
                            type="button"
                            onMouseDown={() => {
                                setLocation(l);
                                setShowDropdown(false);
                            }}
                            className="w-full text-left text-sm px-3 py-2 hover:bg-[#234d6d]/10
                                       text-[#111518] border-b border-[#f0f3f4] last:border-b-0"
                        >
                            {l.localidad} ({l.provincia})
                        </button>
                    ))}

                </div>

            )}

        </div>
    );

}

export default function Filters({
    years, brands,
    year, brand, setYear, setBrand,
    modelVersions, loadingModelVersions, modelVersion, setModelVersion,
    cp, setCp, locations, location, setLocation,
    hasGNC, setHasGNC // <-- Nuevas props recibidas
}) {

    const selectClass =
        "w-full border border-[#f0f3f4] rounded-lg px-3 py-2 text-sm text-[#111518] " +
        "focus:outline-none focus:border-[#234d6d] disabled:bg-gray-50 disabled:text-gray-400 transition-colors";

    const labelClass = "text-sm font-medium text-[#234d6d] mb-1 block";

    return (
        <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-[#f0f3f4] p-6 space-y-4">

            <div>
                <label className={labelClass}>Año</label>
                <select className={selectClass} value={year} onChange={e => setYear(e.target.value)}>
                    <option value="">Elegí un año</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
            </div>

            <div>
                <label className={labelClass}>Marca</label>
                <select
                    className={selectClass}
                    value={brand}
                    disabled={!year}
                    onChange={e => setBrand(e.target.value)}
                >
                    <option value="">Elegí una marca</option>
                    {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
            </div>

            <div>
                <label className={labelClass}>Modelo y versión</label>
                <select
                    className={selectClass}
                    value={modelVersion}
                    disabled={!brand || loadingModelVersions}
                    onChange={e => setModelVersion(e.target.value)}
                >
                    <option value="">
                        {loadingModelVersions ? "Cargando modelos y versiones..." : "Elegí modelo y versión"}
                    </option>
                    {modelVersions.map(mv => {
                        const key = `${mv.model}|${mv.description}`;
                        return (
                            <option key={key} value={key}>
                                {mv.model} {mv.description}
                            </option>
                        );
                    })}
                </select>
            </div>

            <CodigoPostalField
                cp={cp}
                setCp={setCp}
                locations={locations}
                location={location}
                setLocation={setLocation}
                selectClass={selectClass}
                labelClass={labelClass}
            />

            {/* Campo para la pregunta de GNC */}
            <div>
                <label className={labelClass}>¿Tiene equipo de GNC?</label>
                <select
                    className={selectClass}
                    value={hasGNC ? "si" : "no"}
                    onChange={e => setHasGNC(e.target.value === "si")}
                >
                    <option value="no">No</option>
                    <option value="si">Sí</option>
                </select>
            </div>

        </div>
    );
}