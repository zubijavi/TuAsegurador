
import Icon from "./Icon";

const STEPS = [
    "Datos del vehículo",
    "Localidad",
    "Datos de contacto",
];

export default function StepHeader({ currentStep }) {
    const progress = (currentStep / 3) * 100;

    return (
        <div className="flex flex-col gap-space-sm p-space-md pb-space-sm lg:p-space-xl">

            <div className="flex flex-wrap items-center justify-between gap-space-md">

                <div className="flex items-center gap-space-sm">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white font-label-md text-label-md">
                        {currentStep}
                    </span>

                    <span className="font-label-md text-label-md uppercase tracking-wide text-primary lg:normal-case lg:tracking-normal lg:font-headline-md lg:text-headline-md lg:text-on-surface">
                        Paso {currentStep} de 3: {STEPS[currentStep - 1]}
                    </span>
                </div>

                <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
                    <Icon name="timer" className="text-[16px]" />
                    <span>{currentStep === 3 ? "Último paso" : "Continuá para avanzar"}</span>
                </div>

            </div>

            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <p className="hidden lg:block font-body-md text-body-md text-on-surface-variant">
                {currentStep === 1 && "Completá los datos de tu vehículo."}
                {currentStep === 2 && "Indicá dónde se encuentra el vehículo."}
                {currentStep === 3 && "Dejanos tus datos de contacto para recibir asesoramiento. Son opcionales."}
            </p>

        </div>
    );
}
