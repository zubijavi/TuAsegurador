import { CarFront, BriefcaseBusiness } from "lucide-react";

export default function UsageSelector({ usage, onChange }) {
    return (
        <div className="flex flex-col gap-space-sm">
            <label className="font-label-md text-label-md text-on-surface">
                ¿Qué uso le das al vehículo?
            </label>

            <div className="grid grid-cols-2 gap-space-sm">
                <button
                    type="button"
                    onClick={() => onChange("particular")}
                    className={`flex items-center gap-space-sm rounded-lg border p-space-md transition-colors ${
                        usage === "particular"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-outline-variant bg-surface text-on-surface"
                    }`}
                >
                    <CarFront size={22} />
                    <span className="font-label-md text-label-md">
                        Particular
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() => onChange("comercial")}
                    className={`flex items-center gap-space-sm rounded-lg border p-space-md transition-colors ${
                        usage === "comercial"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-outline-variant bg-surface text-on-surface"
                    }`}
                >
                    <BriefcaseBusiness size={22} />
                    <span className="font-label-md text-label-md">
                        Comercial
                    </span>
                </button>
            </div>
        </div>
    );
}