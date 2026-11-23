
import Icon from "./Icon";

export default function ContactStep({
    values,
    setValues,
    onBack,
    onSubmit,
    LABEL,
    FIELD,
    isQuoting,
}) {
    const handleChange = (field) => (e) => {
        setValues((v) => ({
            ...v,
            [field]: e.target.value,
        }));
    };

    return (
        <div className="flex flex-col gap-space-lg p-space-md pt-space-sm lg:p-space-xl">

            <div className="flex flex-col gap-1">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                    ¿Cómo podemos contactarte?
                </h3>

                <p className="text-sm text-on-surface-variant">
                    Completá tus datos si querés que podamos enviarte o
                    asesorarte sobre tu cotización. Todos los campos son opcionales.
                </p>
            </div>

            {/* Nombre */}
            <div className="flex flex-col gap-space-xs">
                <label htmlFor="contact-name" className={LABEL}>
                    Nombre
                </label>

                <div className="relative flex items-center">
                    <Icon
                        name="person"
                        className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                    />

                    <input
                        id="contact-name"
                        type="text"
                        value={values.contactName || ""}
                        onChange={handleChange("contactName")}
                        placeholder="Tu nombre"
                        className={`${FIELD} pl-10 pr-space-md`}
                    />
                </div>
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-space-xs">
                <label htmlFor="contact-phone" className={LABEL}>
                    Teléfono
                </label>

                <div className="relative flex items-center">
                    <Icon
                        name="call"
                        className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                    />

                    <input
                        id="contact-phone"
                        type="tel"
                        inputMode="tel"
                        value={values.contactPhone || ""}
                        onChange={handleChange("contactPhone")}
                        placeholder="Ej: 341 1234567"
                        className={`${FIELD} pl-10 pr-space-md`}
                    />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-space-xs">
                <label htmlFor="contact-email" className={LABEL}>
                    Correo electrónico
                </label>

                <div className="relative flex items-center">
                    <Icon
                        name="mail"
                        className="absolute left-3 text-on-surface-variant text-[20px] pointer-events-none"
                    />

                    <input
                        id="contact-email"
                        type="email"
                        value={values.contactEmail || ""}
                        onChange={handleChange("contactEmail")}
                        placeholder="tucorreo@ejemplo.com"
                        className={`${FIELD} pl-10 pr-space-md`}
                    />
                </div>
            </div>

            <div className="flex items-center gap-space-sm rounded-xl bg-surface-container-low p-space-md">
                <Icon
                    name="info"
                    className="text-primary text-[20px] shrink-0"
                />

                <p className="text-sm text-on-surface-variant">
                    Podés continuar sin completar tus datos de contacto.
                </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between gap-space-md pt-space-md">
                <button
                    type="button"
                    onClick={onBack}
                    disabled={isQuoting}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition disabled:opacity-50"
                >
                    ← Volver
                </button>

                <button
                    type="button"
                    onClick={onSubmit}
                    disabled={isQuoting}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
                >
                    {isQuoting ? "Cotizando..." : "Cotizar en Sancor →"}
                </button>
            </div>

        </div>
    );
}
