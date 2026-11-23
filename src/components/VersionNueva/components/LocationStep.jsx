
import { useEffect, useState } from "react";
import Icon from "./Icon";

const API = (
    import.meta.env.VITE_API_URL || "http://localhost:3000/api"
).replace(/\/$/, "");

export default function LocationStep({
    values,
    setValues,
    onNext,
    onBack,
    LABEL,
    FIELD,
}) {
    const [cities, setCities] = useState([]);
    const [loadingCities, setLoadingCities] = useState(false);
    const [cityMessage, setCityMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const postalCode = String(values.postalCode || "").trim();

        if (!/^\d{4}$/.test(postalCode)) {
            setCities([]);
            setLoadingCities(false);
            setCityMessage("");
            return;
        }

        const controller = new AbortController();

        async function loadCities() {
            setLoadingCities(true);
            setCities([]);
            setCityMessage("Buscando localidades...");

            try {
                const response = await fetch(
                    `${API}/sancor/localidades?zipCode=${encodeURIComponent(postalCode)}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("No se pudieron consultar las localidades.");
                }

                const result = await response.json();

                const localities = Array.isArray(result)
                    ? result
                    : result.localities || result.data || [];

                if (localities.length === 0) {
                    setCities([]);
                    setCityMessage(
                        "No se encontraron localidades para este código postal."
                    );
                    return;
                }

                const options = localities.map((locality) => ({
                    value: String(locality.cityId),
                    label: `${locality.cityName} - ${locality.stateName}`,
                }));

                setCities(options);
                setCityMessage(
                    `${options.length} localidad(es) encontrada(s).`
                );
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error(error);
                setCities([]);
                setCityMessage(
                    "No se pudieron consultar las localidades. Intentá nuevamente."
                );
            } finally {
                if (!controller.signal.aborted) {
                    setLoadingCities(false);
                }
            }
        }

        loadCities();

        return () => controller.abort();
    }, [values.postalCode]);

    const handlePostalCodeChange = (e) => {
        const postalCode = e.target.value
            .replace(/\D/g, "")
            .slice(0, 4);

        setValues((v) => ({
            ...v,
            postalCode,
            city: "",
        }));

        setError("");
    };

    const handleNext = () => {
        if (!/^\d{4}$/.test(String(values.postalCode || ""))) {
            setError("Ingresá un código postal válido de 4 números.");
            return;
        }

        if (!values.city) {
            setError("Seleccioná una localidad para continuar.");
            return;
        }

        setError("");
        onNext();
    };

    return (
        <div className="flex flex-col gap-space-lg p-space-md pt-space-sm lg:p-space-xl">

            <div className="flex flex-col gap-space-xs">
                <label htmlFor="postal-code" className={LABEL}>
                    Código Postal
                </label>

                <div className="relative flex items-center">
                    <Icon
                        name="pin_drop"
                        className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                    />

                    <input
                        id="postal-code"
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        value={values.postalCode || ""}
                        onChange={handlePostalCodeChange}
                        placeholder="Ej: 2000"
                        className={`${FIELD} pl-10 pr-space-md`}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-space-xs">
                <label htmlFor="city" className={LABEL}>
                    Localidad
                </label>

                <div className="relative flex items-center">
                    <Icon
                        name="location_city"
                        className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                    />

                    <select
                        id="city"
                        value={values.city || ""}
                        onChange={(e) => {
                            setValues((v) => ({
                                ...v,
                                city: e.target.value,
                            }));
                            setError("");
                        }}
                        disabled={loadingCities || cities.length === 0}
                        className={`${FIELD} appearance-none pl-10 pr-10 disabled:opacity-60`}
                    >
                        <option value="">
                            {loadingCities
                                ? "Buscando localidades..."
                                : "Seleccioná la localidad"}
                        </option>

                        {cities.map((city) => (
                            <option key={city.value} value={city.value}>
                                {city.label}
                            </option>
                        ))}
                    </select>

                    <Icon
                        name="expand_more"
                        className="absolute right-3 pointer-events-none text-on-surface-variant text-[20px]"
                    />
                </div>

                {cityMessage && (
                    <p className="text-xs text-on-surface-variant">
                        {cityMessage}
                    </p>
                )}
            </div>

            {error && (
                <p className="text-xs text-red-600">{error}</p>
            )}

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-space-md pt-space-md">
                <button
                    type="button"
                    onClick={onBack}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
                >
                    ← Volver
                </button>

                <button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
                >
                    Continuar →
                </button>
            </div>

        </div>
    );
}
