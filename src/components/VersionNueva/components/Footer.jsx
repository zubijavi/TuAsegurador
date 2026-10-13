import Icon from "./Icon";
import LOGO_URL from "../../../assets/taaa.png";

export default function Footer() {
    const columns = [
        {
            title: "Productos",
            links: [
                "Seguro Vehicular",
                "Seguro de Vida",
                "Seguro Médico",
                "Hogar Protegido",
            ],
        },
        {
            title: "Servicios",
            links: [
                "Auxilio Mecánico",
                "Reporte de Siniestro",
                "Red de Talleres",
                "Educación Financiera",
            ],
        },
    ];

    return (
        <footer className="w-full lg:bg-surface-container-low">
            {/* MOBILE */}
            <div className="lg:hidden flex flex-col items-center gap-space-sm px-space-md pt-space-lg pb-space-md text-on-surface-variant">
                <span className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm">
                    <Icon
                        name="verified_user"
                        filled
                        className="text-[16px]"
                    />
                    Soporte activo 24/7 · CNBS Supervisado
                </span>

                <div className="flex items-center gap-space-md font-body-sm text-body-sm">
                    <a href="#" className="hover:text-primary">
                        Términos
                    </a>
                    <span>·</span>
                    <a href="#" className="hover:text-primary">
                        Privacidad
                    </a>
                    <span>·</span>
                    <a href="#" className="hover:text-primary">
                        Contacto
                    </a>
                </div>

                <span className="font-body-sm text-body-sm text-center">
                    © 2024 SegurApp Inc. Todos los derechos reservados.
                </span>
            </div>

            {/* ESCRITORIO */}
            <div className="hidden lg:block w-full px-gutter-desktop max-w-280 mx-auto pt-space-2xl pb-space-xl">
                <div className="grid grid-cols-5 gap-space-xl pb-space-2xl">
                    {/* Marca, descripción y sellos */}
                    <div className="col-span-2 flex flex-col gap-space-md">
                        <div className="flex items-center gap-space-sm">
                            <img
                                src={LOGO_URL}
                                alt="TuAsegurador"
                                className="h-7 w-auto object-contain"
                            />
                   
                        </div>

                        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                            Plataforma de intermediación de seguros confiable,
                            transparente y digital. Cotiza, gestiona y mantén tus
                            pólizas protegidas con respaldo institucional completo.
                        </p>

                        <div className="flex items-center gap-space-md pt-space-xs">
                            <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-lowest shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
                                <Icon
                                    name="verified_user"
                                    className="text-secondary text-[20px]"
                                />
                                <div className="flex flex-col">
                                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                        Vigilado CNBS
                                    </span>
                                    <span className="font-body-sm text-[10px] text-on-surface-variant leading-none">
                                        Supervisión Financiera
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-lowest shadow-[0_1px_3px_0_rgba(15,23,42,0.04)]">
                                <Icon
                                    name="lock"
                                    className="text-primary text-[20px]"
                                />
                                <div className="flex flex-col">
                                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                        SSL 256-bit
                                    </span>
                                    <span className="font-body-sm text-[10px] text-on-surface-variant leading-none">
                                        Datos Cifrados
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columnas de enlaces */}
                    {columns.map((col) => (
                        <div
                            key={col.title}
                            className="flex flex-col gap-space-sm"
                        >
                            <span className="font-label-lg text-label-lg text-on-surface">
                                {col.title}
                            </span>

                            {col.links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    ))}

                    {/* Contacto */}
                    <div className="flex flex-col gap-space-sm">
                        <span className="font-label-lg text-label-lg text-on-surface">
                            Contacto Directo
                        </span>

                        <div className="flex items-start gap-space-xs text-on-surface-variant">
                            <Icon
                                name="support_agent"
                                className="text-[18px] text-secondary"
                            />
                            <span className="font-body-md text-body-md">
                                Línea Gratuita: 800-SEGUR
                            </span>
                        </div>

                        <div className="flex items-start gap-space-xs text-on-surface-variant">
                            <Icon
                                name="mail"
                                className="text-[18px] text-primary"
                            />
                            <span className="font-body-md text-body-md">
                                soporte@tuasegurador.com
                            </span>
                        </div>

                        <div className="flex items-start gap-space-xs text-on-surface-variant">
                            <Icon
                                name="location_on"
                                className="text-[18px] text-tertiary-container"
                            />
                            <span className="font-body-md text-body-md">
                                Edificio Corporativo Torre Financiera, Nivel 6
                            </span>
                        </div>
                    </div>
                </div>

                {/* Legales */}
                <div className="pt-space-lg flex items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
                    <span>
                        © 2026 TuAsegurador. Todos los derechos reservados.
                        Registrado ante la CNBS.
                    </span>

                    <div className="flex items-center gap-space-lg">
                        <a href="#" className="hover:text-primary transition-colors">
                            Términos y Condiciones
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Política de Privacidad
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Centro de Seguridad
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}