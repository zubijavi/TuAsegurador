import Icon from "./Icon";

export default function BottomNav() {
    const items = [
        { label: "Cotizar", icon: "calculate", active: true },
        { label: "Pólizas", icon: "shield" },
        { label: "Auxilio", icon: "emergency" },
        { label: "Perfil", icon: "account_circle" },
    ];

    return (
        <nav
            aria-label="Navegación principal"
            className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant/40 shadow-[0_-4px_16px_-4px_rgba(15,23,42,0.08)]"
        >
            <ul className="grid grid-cols-4 h-16">
                {items.map((it) => (
                    <li key={it.label}>
                        <a
                            href="#"
                            aria-current={it.active ? "page" : undefined}
                            className={`h-full flex flex-col items-center justify-center gap-0.5 font-label-sm text-label-sm ${
                                it.active
                                    ? "text-primary"
                                    : "text-on-surface-variant"
                            }`}
                        >
                            <Icon
                                name={it.icon}
                                filled={it.active}
                                className="text-[24px]"
                            />
                            {it.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}