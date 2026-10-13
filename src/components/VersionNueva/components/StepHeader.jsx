
import Icon from "./Icon";

export default function StepHeader() {
    return (
        <div className="flex flex-col gap-space-sm p-space-md pb-space-sm lg:p-space-xl lg:bg-surface-container-lowest lg:rounded-xl lg:shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                    <span className="hidden lg:flex items-center justify-center w-7 h-7 rounded-full bg-primary text-on-primary font-label-md text-label-md">
                        1
                    </span>

                    <span className="font-label-md text-label-md uppercase tracking-wide text-primary lg:normal-case lg:tracking-normal lg:font-headline-md lg:text-headline-md lg:text-on-surface">
                        Paso 1 de 3: Datos del vehículo
                    </span>
                </div>

                <div className="flex items-center gap-space-xs lg:px-space-md lg:py-1 lg:rounded-full lg:bg-surface-container text-secondary lg:text-on-surface-variant font-label-sm text-label-sm">
                    <Icon
                        name="timer"
                        className="text-[16px] text-secondary lg:text-primary"
                    />
                    <span>45 seg restantes</span>
                </div>
            </div>

            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: "33.333%" }}
                />
            </div>

            <p className="hidden lg:block font-body-md text-body-md text-on-surface-variant">
               Completa los campos para calcular las coberturas disponibles con precisión en tiempo real.
            </p>
        </div>
    );
}
