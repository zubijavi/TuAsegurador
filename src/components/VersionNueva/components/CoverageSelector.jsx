import Icon from "./Icon";
import { COVERAGES } from "../data/cotizadorData";

export default function CoverageSelector({ tier, onChange }) {
    return (
        <div className="flex flex-col gap-space-md lg:pt-space-xs">
            <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface lg:font-headline-sm lg:text-headline-sm">
                    Nivel de cobertura sugerida
                </span>
                <span className="hidden lg:block font-label-sm text-label-sm text-on-surface-variant">
                    Puedes cambiarlo más adelante
                </span>
            </div>

            {/* MOBILE: lista tipo radio */}
            <div role="radiogroup" className="flex flex-col gap-space-sm lg:hidden">
                {COVERAGES.map((c) => {
                    const active = tier === c.id;

                    return (
                        <button
                            key={c.id}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => onChange(c.id)}
                            className={[
                                "w-full text-left flex items-start gap-space-md p-space-md rounded-xl transition-all duration-200",
                                active
                                    ? "bg-surface-container shadow-sm"
                                    : "bg-surface-container-low",
                            ].join(" ")}
                        >
                            <span
                                className={[
                                    "mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                                    active
                                        ? "bg-primary text-on-primary"
                                        : "bg-surface-container-high",
                                ].join(" ")}
                            >
                                {active && (
                                    <Icon name="check" className="text-[16px]" />
                                )}
                            </span>

                            <span className="flex-1 min-w-0">
                                <span className="flex flex-wrap items-center gap-x-space-sm gap-y-1">
                                    <span className="font-headline-sm text-headline-sm text-on-surface">
                                        {c.mobileName}
                                    </span>

                                    {active && c.id === "terceros" && (
                                        <span className="px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                                            {c.badge}
                                        </span>
                                    )}
                                </span>

                                <span className="block font-body-sm text-body-sm text-on-surface-variant mt-1">
                                    {c.mobileDescription}
                                </span>
                            </span>

                            <Icon
                                name={active ? "verified" : "shield"}
                                filled={active}
                                className={`text-[22px] shrink-0 ${
                                    active ? "text-primary" : "text-outline"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>

            {/* ESCRITORIO: tarjetas */}
            <div role="radiogroup" className="hidden lg:grid grid-cols-2 gap-space-md">
                {COVERAGES.map((c) => {
                    const active = tier === c.id;

                    return (
                        <button
                            key={c.id}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => onChange(c.id)}
                            className={[
                                "text-left relative flex flex-col justify-between p-space-lg rounded-xl transition-all duration-200",
                                active
                                    ? "bg-surface-container shadow-sm"
                                    : "bg-surface-container-low hover:bg-surface-container",
                            ].join(" ")}
                        >
                            <span className="flex items-start justify-between gap-space-sm">
                                <span className="flex items-center gap-space-xs">
                                    <Icon
                                        name={active ? "check_circle" : "shield"}
                                        filled={active}
                                        className={`text-[22px] ${
                                            active ? "text-primary" : "text-outline"
                                        }`}
                                    />

                                    <span
                                        className={`font-headline-sm text-headline-sm ${
                                            active ? "text-primary" : "text-on-surface"
                                        }`}
                                    >
                                        {c.name}
                                    </span>
                                </span>

                                <span
                                    className={[
                                        "px-space-sm py-0.5 rounded-full font-label-sm text-[10px] tracking-wider uppercase",
                                        c.id === "terceros"
                                            ? "bg-secondary text-on-secondary"
                                            : "bg-surface-container-high text-on-surface-variant",
                                    ].join(" ")}
                                >
                                    {c.badge}
                                </span>
                            </span>

                            <span className="block font-body-md text-body-md text-on-surface-variant mt-space-md">
                                {c.description}
                            </span>

                            <span className="mt-space-lg flex items-center justify-between bg-surface-container-lowest/60 px-space-md py-2 rounded-lg">
                                <span className="font-label-sm text-label-sm text-on-surface-variant">
                                    {c.franchiseLabel}
                                </span>

                                <span
                                    className={`font-label-md text-label-md ${
                                        c.id === "terceros"
                                            ? "text-secondary"
                                            : "text-on-surface"
                                    }`}
                                >
                                    {c.franchiseValue}
                                </span>
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}