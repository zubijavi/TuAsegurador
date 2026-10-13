import Icon from "./Icon";
import UsageSelector from "./UsageSelector";
import CoverageSelector from "./CoverageSelector";
import PrimaryCTA from "./PrimaryCTA";
import BenefitsList from "./BenefitsList";

export default function VehicleForm({
    values,
    setValues,
    price,
    onSubmit,
    BRANDS,
    LABEL,
    FIELD,
    formatPrice,
}) {
    const set = (key) => (e) =>
        setValues((v) => ({ ...v, [key]: e.target.value }));

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            className="flex flex-col gap-space-lg lg:gap-space-xl p-space-md pt-space-sm lg:p-space-xl lg:bg-surface-container-lowest lg:rounded-xl lg:shadow-sm"
        >
            {/* Marca + Modelo/Año */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md lg:gap-space-lg">
                {/* Marca */}
                <div className="flex flex-col gap-space-xs">
                    <label htmlFor="car-brand" className={LABEL}>
                        Marca del vehículo
                    </label>

                    <div className="relative flex items-center">
                        <Icon
                            name="auto_awesome"
                            className="lg:hidden absolute left-3 text-primary text-[20px] pointer-events-none"
                        />

                        <select
                            id="car-brand"
                            value={values.brand}
                            onChange={set("brand")}
                            className={`${FIELD} appearance-none pl-11 lg:pl-space-md pr-10`}
                        >
                            {BRANDS.map((b) => (
                                <option key={b} value={b}>
                                    {b}
                                </option>
                            ))}
                        </select>

                        <Icon
                            name="expand_more"
                            className="absolute right-3 pointer-events-none text-on-surface-variant text-[20px]"
                        />
                    </div>
                </div>

                {/* Modelo y año */}
                <div className="flex flex-col gap-space-xs">
                    <label htmlFor="car-model" className={LABEL}>
                        Modelo y Año
                    </label>

                    <div className="relative flex items-center">
                        <Icon
                            name="directions_car"
                            className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                        />

                        <input
                            id="car-model"
                            type="text"
                            value={values.model}
                            onChange={set("model")}
                            placeholder="Ej: Corolla Cross - 2023"
                            className={`${FIELD} pl-10 pr-space-md`}
                        />
                    </div>
                </div>
            </div>

            {/* Código postal / localidad */}
            <div className="flex flex-col gap-space-xs">
                <label htmlFor="location" className={LABEL}>
                    Código Postal / Localidad
                </label>

                <div className="relative flex items-center gap-space-sm">
                    <div className="relative flex-1 flex items-center">
                        <Icon
                            name="pin_drop"
                            className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                        />

                        <input
                            id="location"
                            type="text"
                            value={values.location}
                            onChange={set("location")}
                            placeholder="Ej: C1425 - Palermo, CABA"
                            className={`${FIELD} pl-10 pr-12 lg:pr-space-md`}
                        />
                    </div>

                    <button
                        type="button"
                        title="Obtener ubicación automática"
                        aria-label="Ubicarme"
                        className="absolute right-1 w-10 h-10 flex items-center justify-center text-primary rounded-lg lg:static lg:w-auto lg:h-12 lg:px-space-md lg:gap-space-xs lg:bg-surface-container-high lg:hover:bg-surface-container lg:shrink-0 font-label-md text-label-md transition-colors"
                    >
                        <Icon
                            name="my_location"
                            className="text-[20px] lg:text-[18px]"
                        />
                        <span className="hidden lg:inline">Ubicarme</span>
                    </button>
                </div>
            </div>

            {/* Uso del vehículo */}
            <UsageSelector
                usage={values.usage}
                onChange={(usage) =>
                    setValues((v) => ({ ...v, usage }))
                }
            />

            {/* Cobertura */}
            <CoverageSelector
                tier={values.tier}
                onChange={(tier) =>
                    setValues((v) => ({ ...v, tier }))
                }
            />

            {/* SOLO MOBILE: estimación + CTA + beneficios */}
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