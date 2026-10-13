
import { useState } from "react";
import Icon from "./Icon";
import { CATEGORIES } from "../Data/cotizadorData";

const HERO_IMG =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBHnku1MpWnmgsBGRrB3lBlgzKhsnzuzsA05-f0hJLEy9lYh";

export default function Hero({ category, onCategoryChange }) {
    const [showMore, setShowMore] = useState(false);

    // En móvil mostramos primero Auto, Moto y Hogar.
    const primaryCategories = CATEGORIES.filter((cat) => {
        const name = `${cat.id} ${cat.label}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        return (
            name.includes("auto") ||
            name.includes("moto") ||
            name.includes("hogar")
        );
    });

    // Si alguna categoría no coincide con esos nombres,
    // evitamos que desaparezca de la navegación.
    const visibleCategories =
        primaryCategories.length >= 3
            ? primaryCategories
            : CATEGORIES.slice(0, 3);

    const extraCategories = CATEGORIES.filter(
        (cat) => !visibleCategories.some((item) => item.id === cat.id)
    );

    const selectedExtra = extraCategories.find(
        (cat) => cat.id === category
    );

    const renderCategory = (cat) => {
        const active = cat.id === category;

        return (
            <button
                key={cat.id}
                type="button"
                onClick={() => {
                    onCategoryChange(cat.id);
                    setShowMore(false);
                }}
                aria-pressed={active}
                className={[
                    "flex flex-col lg:flex-row items-center justify-center gap-space-xs",
                    "rounded-xl py-1 px-1 lg:px-space-lg lg:py-2.5",
                    "font-label-md text-label-md lg:font-label-lg lg:text-label-lg transition-colors",
                    active
                        ? "bg-primary-container text-on-primary lg:bg-surface-container-lowest lg:text-primary lg:shadow-sm"
                        : "bg-surface-container text-on-surface lg:bg-primary-container/40 lg:text-surface-container lg:hover:bg-primary-container lg:hover:text-surface-container-lowest",
                ].join(" ")}
            >
                <span
                    className={[
                        "flex items-center justify-center w-6 h-6 rounded-full lg:w-auto lg:h-auto lg:bg-transparent",
                        active ? "bg-white/15" : "bg-surface-container-high",
                    ].join(" ")}
                >
                    <Icon
                        name={cat.icon}
                        filled={active}
                        className="text-[16px] lg:text-[20px]"
                    />
                </span>

                <span className="text-center">{cat.label}</span>

                {active && (
                    <span className="hidden lg:block ml-1 w-2 h-2 rounded-full bg-secondary" />
                )}
            </button>
        );
    };

    return (
        <section className="relative w-full overflow-hidden lg:bg-primary lg:text-on-primary">
            <div
                className="hidden lg:block absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-cover bg-center"
                style={{ backgroundImage: `url('${HERO_IMG}')` }}
            />

            <div className="relative max-w-360 mx-auto px-space-md lg:px-gutter-desktop pt-space-sm pb-space-md lg:py-space-xl flex flex-col gap-space-md lg:gap-space-lg">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
                    <div className="flex flex-wrap items-center gap-space-md">
                        <span className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md tracking-wider uppercase">
                            <Icon name="bolt" filled className="text-[15px]" />
                            Cotización Express sin Vueltas
                        </span>

                        <span className="hidden lg:inline text-inverse-primary/80">
                            •
                        </span>

                        <p className="hidden lg:block font-headline-sm text-headline-sm text-surface-container tracking-tight">
                            AUTO PROTEGIDO • Respaldamos cada kilómetro de tu viaje
                        </p>
                    </div>

                    <div className="hidden lg:flex items-center gap-space-xs text-on-primary-container font-label-sm text-label-sm bg-primary-container/60 px-space-md py-1.5 rounded-lg">
                        <Icon name="verified" className="text-[16px] text-secondary-fixed" />
                        <span>Tarifas reguladas y vigentes Octubre 2026</span>
                    </div>
                </div>

                {/* MÓVIL: Auto, Moto y Hogar */}
                <div className="grid grid-cols-3 gap-space-sm lg:hidden">
                    {visibleCategories.map(renderCategory)}
                </div>

                {/* MÓVIL: categorías adicionales desplegables */}
                {extraCategories.length > 0 && (
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={() => setShowMore((previous) => !previous)}
                            aria-expanded={showMore}
                            className="w-full flex items-center justify-center gap-space-sm rounded-xl border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-label-md text-label-md text-primary"
                        >
                            <Icon name="grid_view" className="text-[16px] lg:text-[20px]" />

                            <span>
                                {selectedExtra
                                    ? `Más opciones: ${selectedExtra.label}`
                                    : "Más opciones"}
                            </span>

                            <Icon
                                name={showMore ? "expand_less" : "expand_more"}
                                className="text-[16px] lg:text-[20px]"
                            />
                        </button>

                        {showMore && (
                            <div className="grid grid-cols-3 gap-space-sm mt-space-sm rounded-xl bg-surface-container-low p-space-sm">
                                {extraCategories.map(renderCategory)}
                            </div>
                        )}
                    </div>
                )}

                {/* ESCRITORIO: todas las categorías visibles */}
                <div className="hidden lg:flex lg:flex-wrap lg:items-center gap-space-sm pt-space-xs">
                    {CATEGORIES.map(renderCategory)}
                </div>

                <div
                    className="lg:hidden relative h-16 rounded-xl overflow-hidden bg-primary bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_IMG}')` }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-transparent" />

                    <p className="relative h-full flex items-center px-space-md font-label-md text-label-md text-on-primary">
                        AUTO PROTEGIDO&nbsp;•&nbsp;
                        <span className="font-semibold">Respaldamos cada km</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
