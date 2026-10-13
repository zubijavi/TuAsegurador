import LOGO_URL from "../../../assets/taaa.png";
import Icon from "./Icon";


export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="h-16 lg:h-20 w-full px-space-md lg:px-gutter-desktop max-w-280 mx-auto flex items-center justify-between gap-space-lg">

                {/* Logo */}
                <div className="flex items-center gap-space-sm lg:gap-space-md">
                    <img
                        src={LOGO_URL}
                        alt="TuAsegurador"
                        className="h-8 w-auto object-contain"
                    />
                </div>

                {/* Acciones */}
                <div className="flex items-center gap-space-xs lg:gap-space-md">

                    {/* Ayuda */}
                    <button
                        type="button"
                        aria-label="Centro de ayuda"
                        className="order-1 lg:order-2 p-space-sm rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                    >
                        <Icon
                            name="help"
                            className="text-[22px]"
                        />
                    </button>

                    {/* Notificaciones */}
                    <button
                        type="button"
                        aria-label="Notificaciones"
                        className="order-2 lg:order-1 relative p-space-sm rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                    >
                        <Icon
                            name="notifications"
                            className="text-[22px]"
                        />

                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface" />
                    </button>

                    {/* Separador: solo escritorio */}
                    <div className="order-3 h-6 w-px bg-outline-variant/50 hidden lg:block" />

                    {/* Ingresar: solo escritorio */}
                    <a
                        href="#"
                        className="order-4 hidden lg:inline-flex items-center px-space-md py-2 rounded-lg font-label-md text-label-md text-primary bg-surface-container hover:bg-surface-container-high transition-colors"
                    >
                        Ingresar
                    </a>

                    {/* Avatar */}
                    <div className="order-5 w-9 h-9 lg:w-8 lg:h-8 rounded-full bg-primary flex items-center justify-center">
                        <Icon
                            name="person"
                            filled
                            className="text-on-primary text-[18px]"
                        />
                    </div>

                </div>
            </div>
        </header>
    );
}