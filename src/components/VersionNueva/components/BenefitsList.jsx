import Icon from "./Icon";
import { BENEFITS } from "../data/cotizadorData";

// Lista de beneficios con tilde verde
export default function BenefitsList() {
    return (
        <ul className="flex flex-col gap-space-sm pt-space-xs">
            {BENEFITS.map((b) => (
                <li
                    key={b}
                    className="flex items-center gap-space-sm text-on-surface-variant"
                >
                    {/* Mobile: tilde en círculo verde claro */}
                    <span className="lg:hidden shrink-0 w-6 h-6 rounded-full bg-secondary-container/60 text-secondary flex items-center justify-center">
                        <Icon name="check" className="text-[16px]" />
                    </span>

                    {/* Escritorio: icono task_alt */}
                    <Icon
                        name="task_alt"
                        className="hidden lg:block text-[18px] text-secondary shrink-0"
                    />

                    <span className="font-body-sm text-body-sm lg:text-on-surface-variant text-on-surface">
                        {b}
                    </span>
                </li>
            ))}
        </ul>
    );
}