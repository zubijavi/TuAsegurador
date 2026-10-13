import Icon from "./Icon";

export default function PrimaryCTA({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="group w-full h-14 rounded-lg bg-primary-container lg:bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm shadow-md transition-all active:translate-y-px active:scale-[0.99] flex items-center justify-center gap-space-sm"
        >
            <span>Ver Planes y Precios Personalizados</span>
            <Icon
                name="arrow_forward"
                className="text-[20px] group-hover:translate-x-1 transition-transform"
            />
        </button>
    );
}