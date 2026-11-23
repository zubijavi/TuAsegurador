
import { useEffect, useState } from "react";

import Icon from "./Icon";
// import UsageSelector from "./UsageSelector";
// import CoverageSelector from "./CoverageSelector";
import PrimaryCTA from "./PrimaryCTA";
import BenefitsList from "./BenefitsList";

const API = (
    import.meta.env.VITE_API_URL || "http://localhost:3000/api"
).replace(/\/$/, "");

export default function VehicleForm({
    values,
    setValues,
    price,
    onSubmit,
    LABEL,
    FIELD,
    formatPrice,
}) {
    // Opciones de vehículos
    const [years, setYears] = useState([]);
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [versions, setVersions] = useState([]);

    // Estados de carga
    const [loadingYears, setLoadingYears] = useState(false);
    const [loadingBrands, setLoadingBrands] = useState(false);
    const [loadingModels, setLoadingModels] = useState(false);
    const [loadingVersions, setLoadingVersions] = useState(false);

    const [vehicleError, setVehicleError] = useState("");

    // Localidades
    const [cities, setCities] = useState([]);
    const [loadingCities, setLoadingCities] = useState(false);
    const [cityMessage, setCityMessage] = useState("");

    // Cargar años al iniciar
    useEffect(() => {
        const controller = new AbortController();

        async function loadYears() {
            setLoadingYears(true);

            try {
                const response = await fetch(
                    `${API}/mongo/vehiculos/years`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("No se pudieron cargar los años.");
                }

                const result = await response.json();

                const yearOptions = (result.data || []).map((year) => ({
                    value: String(year),
                    label: String(year),
                }));

                setYears(yearOptions);
                setVehicleError("");
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error("Error cargando años:", error);
                setVehicleError("No se pudieron cargar los años.");
            } finally {
                if (!controller.signal.aborted) {
                    setLoadingYears(false);
                }
            }
        }

        loadYears();

        return () => controller.abort();
    }, []);

    // Cargar marcas cuando cambia el año
    useEffect(() => {
        if (!values.year) {
            setBrands([]);
            return;
        }

        const controller = new AbortController();

        async function loadBrands() {
            setLoadingBrands(true);
            setBrands([]);
            setModels([]);
            setVersions([]);

            try {
                const response = await fetch(
                    `${API}/mongo/vehiculos/brands/${encodeURIComponent(values.year)}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("No se pudieron cargar las marcas.");
                }

                const result = await response.json();

                setBrands(
                    (result.data || []).map((brand) => ({
                        value: brand,
                        label: brand,
                    }))
                );

                setVehicleError("");
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error("Error cargando marcas:", error);
                setVehicleError("No se pudieron cargar las marcas.");
            } finally {
                if (!controller.signal.aborted) {
                    setLoadingBrands(false);
                }
            }
        }

        loadBrands();

        return () => controller.abort();
    }, [values.year]);

    // Cargar modelos cuando cambia año o marca
    useEffect(() => {
        if (!values.year || !values.brand) {
            setModels([]);
            return;
        }

        const controller = new AbortController();

        async function loadModels() {
            setLoadingModels(true);
            setModels([]);
            setVersions([]);

            try {
                const response = await fetch(
                    `${API}/mongo/vehiculos/models/${encodeURIComponent(values.year)}/${encodeURIComponent(values.brand)}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("No se pudieron cargar los modelos.");
                }

                const result = await response.json();

                setModels(
                    (result.data || []).map((model) => ({
                        value: model,
                        label: model,
                    }))
                );

                setVehicleError("");
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error("Error cargando modelos:", error);
                setVehicleError("No se pudieron cargar los modelos.");
            } finally {
                if (!controller.signal.aborted) {
                    setLoadingModels(false);
                }
            }
        }

        loadModels();

        return () => controller.abort();
    }, [values.year, values.brand]);

    // Cargar versiones cuando cambia año, marca o modelo
    useEffect(() => {
        if (!values.year || !values.brand || !values.model) {
            setVersions([]);
            return;
        }

        const controller = new AbortController();

        async function loadVersions() {
            setLoadingVersions(true);
            setVersions([]);

            try {
                const response = await fetch(
                    `${API}/mongo/vehiculos/versions/${encodeURIComponent(values.year)}/${encodeURIComponent(values.brand)}/${encodeURIComponent(values.model)}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("No se pudieron cargar las versiones.");
                }

                const result = await response.json();

                setVersions(
                    (result.data || []).map((item) => ({
                        value: String(item.infoautoId),
                        label: item.version,
                        vehicleValue: item.price,
                    }))
                );

                setVehicleError("");
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error("Error cargando versiones:", error);
                setVehicleError("No se pudieron cargar las versiones.");
            } finally {
                if (!controller.signal.aborted) {
                    setLoadingVersions(false);
                }
            }
        }

        loadVersions();

        return () => controller.abort();
    }, [values.year, values.brand, values.model]);

    // Consultar localidades al completar el código postal
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
                    throw new Error("No se pudieron consultar las localidades");
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

                const cityOptions = localities.map((locality) => ({
                    value: String(locality.cityId),
                    label: `${locality.cityName} - ${locality.stateName}`,
                }));

                setCities(cityOptions);
                setCityMessage(
                    `${cityOptions.length} localidad(es) encontrada(s).`
                );
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error("Error cargando localidades:", error);

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

    // Cambios de selección de vehículos
    const handleVehicleChange = (name) => (e) => {
        const value = e.target.value;

        setVehicleError("");

        setValues((v) => {
            if (name === "year") {
                return {
                    ...v,
                    year: value,
                    brand: "",
                    model: "",
                    version: "",
                    vehicleValue: null,
                    vehicleVersion: "",
                };
            }

            if (name === "brand") {
                return {
                    ...v,
                    brand: value,
                    model: "",
                    version: "",
                    vehicleValue: null,
                    vehicleVersion: "",
                };
            }

            if (name === "model") {
                return {
                    ...v,
                    model: value,
                    version: "",
                    vehicleValue: null,
                    vehicleVersion: "",
                };
            }

            if (name === "version") {
                const selected = versions.find(
                    (item) => item.value === value
                );

                return {
                    ...v,
                    version: value,
                    vehicleValue: selected?.vehicleValue ?? null,
                    vehicleVersion: selected?.label ?? "",
                };
            }

            return { ...v, [name]: value };
        });
    };

    const handlePostalCodeChange = (e) => {
        const postalCode = e.target.value.replace(/\D/g, "").slice(0, 4);

        setValues((v) => ({
            ...v,
            postalCode,
            city: "",
        }));
    };

    const set = (key) => (e) =>
        setValues((v) => ({ ...v, [key]: e.target.value }));

    const Select = ({
        id,
        label,
        icon,
        name,
        items = [],
        placeholder,
        disabled = false,
        onChange,
    }) => (
        <div className="flex flex-col gap-space-xs">
            <label htmlFor={id} className={LABEL}>
                {label}
            </label>

            <div className="relative flex items-center">
                <Icon
                    name={icon}
                    className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                />

                <select
                    id={id}
                    value={values[name] || ""}
                    onChange={onChange || set(name)}
                    disabled={disabled}
                    className={`${FIELD} appearance-none pl-10 pr-10 disabled:opacity-60`}
                >
                    <option value="">{placeholder}</option>

                    {items.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>

                <Icon
                    name="expand_more"
                    className="absolute right-3 pointer-events-none text-on-surface-variant text-[20px]"
                />
            </div>
        </div>
    );

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            className="flex flex-col gap-space-lg lg:gap-space-xl p-space-md pt-space-sm lg:p-space-xl lg:bg-surface-container-lowest lg:rounded-xl lg:shadow-sm"
        >
            {/* Año + Marca */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md lg:gap-space-lg">
                <Select
                    id="car-year"
                    label="Año"
                    icon="calendar_month"
                    name="year"
                    items={years}
                    placeholder={loadingYears ? "Cargando años..." : "Seleccioná el año"}
                    disabled={loadingYears}
                    onChange={handleVehicleChange("year")}
                />

                <Select
                    id="car-brand"
                    label="Marca del vehículo"
                    icon="auto_awesome"
                    name="brand"
                    items={brands}
                    placeholder={loadingBrands ? "Cargando marcas..." : "Seleccioná la marca"}
                    disabled={!values.year || loadingBrands}
                    onChange={handleVehicleChange("brand")}
                />
            </div>

            {/* Modelo + Versión */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md lg:gap-space-lg">
                <Select
                    id="car-model"
                    label="Modelo"
                    icon="directions_car"
                    name="model"
                    items={models}
                    placeholder={loadingModels ? "Cargando modelos..." : "Seleccioná el modelo"}
                    disabled={!values.brand || loadingModels}
                    onChange={handleVehicleChange("model")}
                />

                <Select
                    id="car-version"
                    label="Versión"
                    icon="tune"
                    name="version"
                    items={versions}
                    placeholder={loadingVersions ? "Cargando versiones..." : "Seleccioná la versión"}
                    disabled={!values.model || loadingVersions}
                    onChange={handleVehicleChange("version")}
                />
            </div>

            {vehicleError && (
                <p className="text-xs text-red-600">{vehicleError}</p>
            )}

            {/* Código postal + GNC + Localidad */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md lg:gap-space-lg">

                {/* Código postal */}
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

                {/* GNC */}
                <label
                    htmlFor="has-gnc"
                    className="flex items-center justify-between gap-space-md p-space-md rounded-xl bg-surface-container-low cursor-pointer"
                >
                    <div className="flex items-center gap-space-sm">
                        <Icon
                            name="local_gas_station"
                            className="text-on-surface-variant text-[20px]"
                        />

                        <span className="font-body-md text-body-md text-on-surface">
                            ¿Tiene equipo de GNC?
                        </span>
                    </div>

                    <input
                        id="has-gnc"
                        type="checkbox"
                        checked={!!values.hasGNC}
                        onChange={(e) =>
                            setValues((v) => ({
                                ...v,
                                hasGNC: e.target.checked,
                            }))
                        }
                        className="w-5 h-5 accent-primary"
                    />
                </label>

                {/* Localidad */}
                <div className="flex flex-col gap-space-xs">
                    <Select
                        id="city"
                        label="Localidad"
                        icon="location_city"
                        name="city"
                        items={cities}
                        placeholder={
                            loadingCities
                                ? "Buscando localidades..."
                                : "Seleccioná la localidad"
                        }
                        disabled={loadingCities || cities.length === 0}
                    />

                    {cityMessage && (
                        <p className="text-xs text-on-surface-variant">
                            {cityMessage}
                        </p>
                    )}
                </div>
            </div>

            {/* Uso del vehículo */}
            {/* <UsageSelector
                usage={values.usage}
                onChange={(usage) =>
                    setValues((v) => ({ ...v, usage }))
                }
            /> */}

            {/* Cobertura */}
            {/* <CoverageSelector
                tier={values.tier}
                onChange={(tier) =>
                    setValues((v) => ({ ...v, tier }))
                }
            /> */}

            {/* SOLO MOBILE */}
            <div className="lg:hidden flex flex-col gap-space-md">
                <div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between gap-space-md">
                        <div className="flex flex-col gap-1 max-w-[50%]">
                            <span className="font-label-md text-label-md text-primary uppercase tracking-wide">
                                Estimación preliminar
                            </span>

                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Precio cerrado sujeto a inspección digital
                            </span>
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                                desde
                            </span>

                            <span className="font-quote-price text-quote-price text-primary tabular-nums">
                                {formatPrice(price)}
                            </span>

                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                                /mes
                            </span>
                        </div>
                    </div>

                    <div className="flex items-start gap-space-sm">
                        <Icon
                            name="task_alt"
                            className="text-[18px] text-secondary shrink-0 mt-0.5"
                        />

                        <p className="font-body-sm text-body-sm text-on-surface">
                            Incluye remolque 24/7 (300 km), cerraduras y granizo sin tope
                        </p>
                    </div>
                </div>

                <PrimaryCTA onClick={onSubmit} />
                <BenefitsList />
            </div>

            {/* Datos protegidos: solo escritorio */}
            <div className="hidden lg:flex items-center gap-space-sm pt-space-md text-on-surface-variant font-body-sm text-body-sm">
                <Icon
                    name="security"
                    filled
                    className="text-[18px] text-secondary"
                />

                <span>
                    Tus datos están protegidos bajo normativa de secreto asegurador
                </span>
            </div>
        </form>
    );
}
