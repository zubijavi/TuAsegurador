import Icon from "./Icon";
import PrimaryCTA from "./PrimaryCTA";
import BenefitsList from "./BenefitsList";
import ChatCard from "./ChatCard";

export default function Sidebar({ price, onSubmit, formatPrice, PARTNERS }) {
    return (
        <aside className="hidden lg:flex lg:col-span-5 flex-col gap-space-lg sticky top-24">
            {/* Tarjeta de estimación */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
                <div className="bg-primary-container p-space-lg text-on-primary flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                        <Icon
                            name="calculate"
                            className="text-[20px] text-secondary-container"
                        />
                        <span className="font-label-md text-label-md tracking-wider uppercase">
                            Estimación Preliminar
                        </span>
                    </div>

                    <span className="font-label-sm text-label-sm bg-surface-container-lowest/20 px-space-sm py-0.5 rounded text-surface-container-lowest">
                        En vivo
                    </span>
                </div>

                <div className="p-space-xl flex flex-col gap-space-lg">
                    {/* Precio */}
                    <div className="flex flex-col gap-space-xs">
                        <div className="flex items-baseline gap-space-xs">
                            <span className="font-body-md text-body-md text-on-surface-variant">
                                desde
                            </span>

                            <span
                                aria-live="polite"
                                className="font-quote-price text-quote-price text-primary leading-none tabular-nums"
                            >
                                {formatPrice(price)}
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
                            Precio cerrado sujeto a inspección digital 100% online
                        </p>
                    </div>

                    {/* Qué incluye */}
                    <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                        <Icon
                            name="check_circle"
                            className="text-secondary text-[22px] shrink-0"
                        />

                        <p className="font-body-sm text-body-sm text-on-surface">
                            <strong className="font-semibold">
                                Incluido sin costo:
                            </strong>{" "}
                            Remolque 24/7 hasta 300 km lineales, reposición de
                            cerraduras y granizo sin tope de eventos.
                        </p>
                    </div>

                    <PrimaryCTA onClick={onSubmit} />
                    <BenefitsList />
                </div>
            </div>

            <ChatCard />

            {/* Aseguradoras asociadas */}
            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
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
            </div>
        </aside>
    );
}