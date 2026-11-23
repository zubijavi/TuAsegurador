
import Icon from "./Icon";
import PrimaryCTA from "./PrimaryCTA";
import BenefitsList from "./BenefitsList";
import ChatCard from "./ChatCard";

export default function Sidebar({
    price,
    plans = [],
    onSubmit,
    formatPrice,
    PARTNERS,
    isQuoting = false,
}) {
    // Buscar el plan con menor cuota mensual
    const cheapestPlan = plans
        .filter(
            (plan) =>
                plan.module?.coverageName?.toLowerCase() !== "garage"
        )
        .sort(
            (a, b) =>
                Number(a.quotaPremiumMonthly) -
                Number(b.quotaPremiumMonthly)
        )[0] || null;

    // Si hay cotización, mostrar el precio real.
    // Si no, mostrar la estimación preliminar.
    const displayPrice = cheapestPlan
        ? cheapestPlan.quotaPremiumMonthly
        : price;

    const coverageName =
        cheapestPlan?.module?.coverageName;

    return (
        <aside className="hidden lg:flex lg:col-span-5 flex-col gap-space-lg sticky top-24">

            <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">

                {/* Encabezado */}
                <div className="bg-primary-container p-space-lg text-on-primary flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                        <Icon
                            name="calculate"
                            className="text-[20px] text-secondary-container"
                        />

                        <span className="font-label-md text-label-md tracking-wider uppercase">
                            {cheapestPlan
                                ? "Mejor cobertura disponible"
                                : "Estimación preliminar"}
                        </span>
                    </div>

                    <span className="font-label-sm bg-surface-container-lowest/20 px-space-sm py-0.5 rounded text-surface-container-lowest">
                        {cheapestPlan ? "Cotizado" : "En vivo"}
                    </span>
                </div>

                <div className="p-space-xl flex flex-col gap-space-lg">

                    {/* Cobertura más económica */}
                    <div className="flex flex-col gap-space-xs">

                        {coverageName && (
                            <div className="mb-2">
                                <span className="font-label-md text-label-md text-secondary font-semibold">
                                    {coverageName}
                                </span>
                            </div>
                        )}

                        <div className="flex items-baseline gap-space-xs flex-wrap">
                            <span className="font-body-md text-body-md text-on-surface-variant">
                                desde
                            </span>

                            <span
                                aria-live="polite"
                                className="font-quote-price text-quote-price text-primary leading-none tabular-nums"
                            >
                                {formatPrice(displayPrice)}
                            </span>

                            <span className="font-headline-sm text-headline-sm text-on-surface-variant">
                                /mes
                            </span>
                        </div>

                        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs pt-space-xs">
                            <Icon
                                name="info"
                                className="text-[15px] text-secondary"
                            />

                            {cheapestPlan
                                ? "Menor cuota mensual ofrecida por Sancor Seguros"
                                : "Completá los datos para conocer tu cotización"
                            }
                        </p>
                    </div>

                    {/* Beneficios */}
                    {/* <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                        <Icon
                            name="check_circle"
                            className="text-secondary text-[22px] shrink-0"
                        />

                        <p className="font-body-sm text-body-sm text-on-surface">
                            <strong className="font-semibold">
                                Incluido sin costo:
                            </strong>{" "}
                            Remolque 24/7 hasta 300 km lineales,
                            reposición de cerraduras y granizo sin
                            tope de eventos.
                        </p>
                    </div> */}

                    {/* Botón */}
                    <div className={isQuoting ? "opacity-70 pointer-events-none" : ""}>
                        <PrimaryCTA onClick={onSubmit} />

                        {isQuoting && (
                            <p className="text-xs text-center text-on-surface-variant mt-2">
                                Consultando Sancor...
                            </p>
                        )}
                    </div>

                    {/* <BenefitsList /> */}

                </div>
            </div>

            <ChatCard />

            {/* Aseguradoras */}
            {/* <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-sm">

                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Compañías asociadas disponibles
                </span>

                <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs opacity-75">
                    {PARTNERS.map((p) => (
                        <span
                            key={p}
                            className="font-headline-sm text-headline-sm text-on-surface-variant tracking-tighter"
                        >
                            {p}
                        </span>
                    ))}
                </div>
            </div> */}

        </aside>
    );
}
