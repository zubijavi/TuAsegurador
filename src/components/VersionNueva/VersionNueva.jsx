
import { useState } from "react";

import Header from "./components/Header";
import ChatCard from "./components/ChatCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import ResultadosCotizacion from "./ResultadosCotizacion";

import VehicleStep from "./components/VehicleStep";
import LocationStep from "./components/LocationStep";
import ContactStep from "./components/ContactStep";
import StepHeader from "./components/StepHeader";

import {
    COVERAGES,
    PARTNERS,
} from "./data/cotizadorData";

import "./VersionNueva.css";

const API = (
    import.meta.env.VITE_API_URL || "http://localhost:3000/api"
).replace(/\/$/, "");

const COMMERCIAL_SURCHARGE = 4400;

const formatPrice = (n) =>
    `$${Number(n || 0).toLocaleString("es-AR")}`;

const LABEL = "font-label-md text-label-md text-on-surface";

const FIELD =
    "w-full h-12 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md " +
    "focus:outline-none focus:bg-surface-container focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 " +
    "transition-colors";

// Fecha de vigencia: mañana a las 00:00
function getVigencyDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}T00:00:00`;
}

export default function CotizadorAuto() {

    const [category, setCategory] = useState("auto");

    // Paso actual del cotizador
    const [currentStep, setCurrentStep] = useState(1);

    // Datos del formulario
    const [values, setValues] = useState({
        year: "",
        brand: "",
        model: "",
        version: "",
        vehicleValue: null,
        vehicleVersion: "",

        postalCode: "",
        city: "",

        hasGNC: false,

        usage: "particular",
        tier: "terceros",

        contactName: "",
        contactPhone: "",
        contactEmail: "",
    });

    const [isQuoting, setIsQuoting] = useState(false);
    const [quoteError, setQuoteError] = useState("");
    const [quoteMessage, setQuoteMessage] = useState("");

    // Resultados
    const [quoteData, setQuoteData] = useState(null);

    const coverage = COVERAGES.find(
        (c) => c.id === values.tier
    );

    const price =
        (coverage?.basePrice || 0) +
        (values.usage === "comercial"
            ? COMMERCIAL_SURCHARGE
            : 0
        );

    // Avanzar de paso
    const handleNext = () => {
        setQuoteError("");
        setQuoteMessage("");

        setCurrentStep((step) => Math.min(step + 1, 3));
    };

    // Volver de paso
    const handlePrevious = () => {
        setQuoteError("");
        setQuoteMessage("");

        setCurrentStep((step) => Math.max(step - 1, 1));
    };

    // Construir y enviar cotización a Sancor
    const handleSubmit = async () => {

        if (isQuoting) return;

        setQuoteError("");
        setQuoteMessage("");

        // Validar datos obligatorios
        const requiredFields = [
            values.year,
            values.brand,
            values.model,
            values.version,
            values.postalCode,
            values.city,
        ];

        if (requiredFields.some((field) => !field)) {
            setQuoteError(
                "Completá todos los datos del vehículo y la ubicación."
            );
            return;
        }

        try {
            setIsQuoting(true);

            // Normalizar datos
            const postalCode = Number(values.postalCode);
            const cityCode = Number(values.city);
            const vehicleCode = String(values.version).padStart(7, "0");
            const vehicleYear = Number(values.year);

            if (
                !Number.isFinite(postalCode) ||
                !Number.isFinite(cityCode) ||
                !Number.isFinite(vehicleYear)
            ) {
                throw new Error("Hay datos numéricos inválidos.");
            }

            // Objeto esperado por el servicio de Sancor
            const vehicleQuotation = {
                policyVigencyCode: 1,
                policyPaymentPeriodicityCode: 5,
                productCode: 24,
                currencyCode: 1,

                policyPeriodStartEffectiveDate: getVigencyDate(),
                policyQuotas: 0,

                person: {
                    isJuridicPerson: false,
                    identificationType: "D",
                },

                discountCustomizations: [
                    { discountCode: 4, percentage: 0 },
                    { discountCode: 1, percentage: 99 },
                    { discountCode: 58, percentage: 99 },
                    { discountCode: 90, percentage: 99 },
                    { discountCode: 173, percentage: 99 },
                ],

                coveredItemInsuredSum: 0,
                conditionCode: 4,
                respectClientIvaCondition: true,

                zone: {
                    postalCode,
                    cityCode,
                },

                vehicle: {
                    vehicleTrackingEquipment: false,
                    vehicleCode,
                    vehicleYear,
                    vehicleUseTypeCode: 2,
                    yearSuggestedValue: 0,

                    gncInformation: {
                        hasGNC: values.hasGNC,
                        accesoryInsuredSum: 0,
                    },

                    assistance: {
                        assistance: "SA_02",
                        assistanceProvider: "ibero",
                    },

                    hasAuxiliaryTires: true,
                    zeroKM: false,
                },

                driversUnder25: false,
                anualKM: true,
                garageParking: true,
            };

            console.log(
                "Enviando cotización a Sancor:",
                vehicleQuotation
            );

            const response = await fetch(`${API}/sancor/cotizar`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ vehicleQuotation }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result?.message ||
                    result?.error ||
                    `Error HTTP ${response.status}`
                );
            }

            console.log("Respuesta de Sancor:", result);

            const plans = (
                result?.vehicleQuotation?.plans || []
            ).filter((plan) => plan.success);

            console.log(
                "PLANES SANCOR:",
                JSON.stringify(
                    plans.map((plan) => ({
                        nombre: plan.module?.coverageName,
                        codigo: plan.module?.coverageCode,
                        cuotaMensual: plan.quotaPremiumMonthly,
                        premioTotal: plan.premium,
                        sumaAsegurada: plan.vehicleInsuredSum,
                    })),
                    null,
                    2
                )
            );

            if (plans.length === 0) {
                console.warn(
                    "Sancor respondió, pero no devolvió planes exitosos:",
                    result
                );

                setQuoteMessage(
                    "La solicitud llegó a Sancor, pero no se encontraron planes exitosos. Revisá la respuesta en la consola."
                );

                return;
            }

            const newQuoteData = {
                category,
                ...values,
                cityId: values.city,
                price,
                vehicleQuotation,
                response: result,
                plans,
            };

            console.log(
                "PRIMER PLAN COMPLETO:",
                JSON.stringify(plans[0], null, 2)
            );

            setQuoteData(newQuoteData);

        } catch (error) {
            console.error("Error cotizando en Sancor:", error);

            setQuoteError(
                error.message || "No se pudo realizar la cotización."
            );

        } finally {
            setIsQuoting(false);
        }
    };

    // Volver al formulario desde resultados
    const handleBack = () => {
        setQuoteData(null);
        setQuoteError("");
        setQuoteMessage("");
        setCurrentStep(1);
    };

    return (
        <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">

            <Header />

            <main className="w-full pt-16 lg:pt-20 pb-20 lg:pb-0">

                <div className="w-full max-w-360 mx-auto px-space-md lg:px-gutter-desktop py-space-md lg:py-space-2xl">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-space-2xl items-start">

                        {/* FORMULARIO DE TRES PASOS */}
                        <div className="lg:col-span-7 flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm">

                            <StepHeader currentStep={currentStep} />

                            {/* PASO 1: VEHÍCULO */}
                            {currentStep === 1 && (
                                <VehicleStep
                                    values={values}
                                    setValues={setValues}
                                    onNext={handleNext}
                                    LABEL={LABEL}
                                    FIELD={FIELD}
                                />
                            )}

                            {/* PASO 2: LOCALIDAD */}
                            {currentStep === 2 && (
                                <LocationStep
                                    values={values}
                                    setValues={setValues}
                                    onNext={handleNext}
                                    onBack={handlePrevious}
                                    LABEL={LABEL}
                                    FIELD={FIELD}
                                />
                            )}

                            {/* PASO 3: CONTACTO */}
                            {currentStep === 3 && (
                                <ContactStep
                                    values={values}
                                    setValues={setValues}
                                    onBack={handlePrevious}
                                    onSubmit={handleSubmit}
                                    LABEL={LABEL}
                                    FIELD={FIELD}
                                    isQuoting={isQuoting}
                                />
                            )}

                            {/* ERRORES */}
                            {quoteError && (
                                <p className="mx-space-md mb-space-md text-sm text-red-600">
                                    {quoteError}
                                </p>
                            )}

                            {/* CARGANDO */}
                            {isQuoting && (
                                <p className="mx-space-md mb-space-md text-sm text-on-surface-variant">
                                    Consultando tarifas en Sancor...
                                </p>
                            )}

                            {/* MENSAJES */}
                            {quoteMessage && (
                                <p className="mx-space-md mb-space-md text-sm text-amber-600">
                                    {quoteMessage}
                                </p>
                            )}

                        </div>

                        {/* CHAT MOBILE */}
                        <div className="lg:hidden">
                            <ChatCard />
                        </div>

                        {/* SIDEBAR */}
                        <Sidebar
                            price={price}
                            plans={quoteData?.plans || []}
                            onSubmit={() => setCurrentStep(3)}
                            formatPrice={formatPrice}
                            PARTNERS={PARTNERS}
                            isQuoting={isQuoting}
                        />

                    </div>

                    {/* RESULTADOS DE COTIZACIÓN */}
                    {/* MODAL RESULTADOS DE COTIZACIÓN */}
                    {quoteData && (
                        <div
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-6"
                            onClick={handleBack}
                        >
                            <div
                                className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* BOTÓN CERRAR */}
                                <button
                                    onClick={handleBack}
                                    className="sticky top-0 ml-auto z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md hover:bg-gray-100 transition-colors"
                                    aria-label="Cerrar resultados"
                                >
                                    <span className="text-2xl leading-none">×</span>
                                </button>

                                {/* RESULTADOS */}
                                <div className="px-3 pb-6 sm:px-6 lg:px-8">
                                    <ResultadosCotizacion
                                        quoteData={quoteData}
                                        onBack={handleBack}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>

            {/* <Footer /> */}

        </div>
    );
}
