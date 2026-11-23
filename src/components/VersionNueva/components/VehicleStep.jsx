
import { useEffect, useState } from "react";
import Icon from "./Icon";
import BenefitsList from "./BenefitsList";

const API = (
    import.meta.env.VITE_API_URL || "http://localhost:3000/api"
).replace(/\/$/, "");

export default function VehicleStep({
    values,
    setValues,
    onNext,
    LABEL,
    FIELD,
}) {
    const [years, setYears] = useState([]);
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [versions, setVersions] = useState([]);

    const [loadingYears, setLoadingYears] = useState(false);
    const [loadingBrands, setLoadingBrands] = useState(false);
    const [loadingModels, setLoadingModels] = useState(false);
    const [loadingVersions, setLoadingVersions] = useState(false);

    const [vehicleError, setVehicleError] = useState("");

    // Cargar años
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

                setYears(
                    (result.data || []).map((year) => ({
                        value: String(year),
                        label: String(year),
                    }))
                );
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error(error);
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

    // Cargar marcas
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

                if (!response.ok) throw new Error();

                const result = await response.json();

                setBrands(
                    (result.data || []).map((brand) => ({
                        value: brand,
                        label: brand,
                    }))
                );
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error(error);
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

    // Cargar modelos
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

                if (!response.ok) throw new Error();

                const result = await response.json();

                setModels(
                    (result.data || []).map((model) => ({
                        value: model,
                        label: model,
                    }))
                );
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error(error);
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

    // Cargar versiones
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

                if (!response.ok) throw new Error();

                const result = await response.json();

                setVersions(
                    (result.data || []).map((item) => ({
                        value: String(item.infoautoId),
                        label: item.version,
                        vehicleValue: item.price,
                    }))
                );
            } catch (error) {
                if (error.name === "AbortError") return;

                console.error(error);
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
                    onChange={onChange || handleVehicleChange(name)}
                    disabled={disabled}
                    className={`${FIELD} appearance-none pl-10 pr-10 disabled:opacity-60`}
                >
                    <option value="">{placeholder}</option>

                    {items.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
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

    const handleNext = () => {
        if (
            !values.year ||
            !values.brand ||
            !values.model ||
            !values.version
        ) {
            setVehicleError(
                "Completá todos los datos del vehículo para continuar."
            );
            return;
        }

        setVehicleError("");
        onNext();
    };

    return (
        <div className="flex flex-col gap-space-lg p-space-md pt-space-sm lg:p-space-xl">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md lg:gap-space-lg">
                <Select
                    id="car-year"
                    label="Año"
                    icon="calendar_month"
                    name="year"
                    items={years}
                    placeholder={loadingYears ? "Cargando años..." : "Seleccioná el año"}
                    disabled={loadingYears}
                />

                <Select
                    id="car-brand"
                    label="Marca del vehículo"
                    icon="auto_awesome"
                    name="brand"
                    items={brands}
                    placeholder={loadingBrands ? "Cargando marcas..." : "Seleccioná la marca"}
                    disabled={!values.year || loadingBrands}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md lg:gap-space-lg">
                <Select
                    id="car-model"
                    label="Modelo"
                    icon="directions_car"
                    name="model"
                    items={models}
                    placeholder={loadingModels ? "Cargando modelos..." : "Seleccioná el modelo"}
                    disabled={!values.brand || loadingModels}
                />

                <Select
                    id="car-version"
                    label="Versión"
                    icon="tune"
                    name="version"
                    items={versions}
                    placeholder={loadingVersions ? "Cargando versiones..." : "Seleccioná la versión"}
                    disabled={!values.model || loadingVersions}
                />
            </div>

            {vehicleError && (
                <p className="text-xs text-red-600">{vehicleError}</p>
            )}

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

            <div className="lg:hidden">
                <BenefitsList />
            </div>

            <div className="flex justify-end pt-space-md">
                <button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
                >
                    Continuar
                    <span className="ml-2">→</span>
                </button>
            </div>

        </div>
    );
}
