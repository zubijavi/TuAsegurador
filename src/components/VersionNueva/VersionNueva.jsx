import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StepHeader from "./components/StepHeader";
import ChatCard from "./components/ChatCard";
import VehicleForm from "./components/VehicleForm";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// import BottomNav from "./components/BottomNav";
import {BRANDS, COVERAGES, PARTNERS} from "./Data/cotizadorData";
import './VersionNueva.css';



// Navegación principal (solo escritorio, en el header).
const NAV_ITEMS = ["Cotizar", "Pólizas", "Auxilio 24/7", "Sucursales", "Blog"];



// Recargo mensual por uso comercial / apps (18.900 - 14.500 en el diseño original).
const COMMERCIAL_SURCHARGE = 4400;


// Formatea 14500 → "$14.500" (formato es-AR).
const formatPrice = (n) => `$${n.toLocaleString("es-AR")}`;

/* -----------------------------------------------------------------------------
 *  CLASES REUTILIZABLES (para no repetir strings largos)
 * ---------------------------------------------------------------------------*/

// Label de campo
const LABEL = "font-label-md text-label-md text-on-surface";

// Input / select base (48px de alto = target táctil del DESIGN.md)
const FIELD =
    "w-full h-12 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md " +
    "focus:outline-none focus:bg-surface-container focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 " +
    "transition-colors";

/* -----------------------------------------------------------------------------
 *  ÍCONO (Material Symbols Outlined)
 *  `filled` activa la variante rellena del ícono.
 * ---------------------------------------------------------------------------*/


/* =============================================================================
 *  COMPONENTE PRINCIPAL
 * ===========================================================================*/
export default function CotizadorAuto({ onContinue }) {
    // Categoría activa del hero (por ahora solo "auto" tiene flujo).
    const [category, setCategory] = useState("auto");

    // Estado del formulario (valores iniciales = los del diseño).
    const [values, setValues] = useState({
        brand: "Toyota",
        model: "Corolla Cross - 2023",
        location: "C1425 - Palermo, CABA",
        usage: "particular", // "particular" | "comercial"
        tier: "terceros", // id de COVERAGES
    });

    // Precio mensual estimado = base de la cobertura (+ recargo si es uso comercial).
    // Reemplazar este cálculo por la llamada a tu backend de cotización.
    const coverage = COVERAGES.find((c) => c.id === values.tier);
    const price = coverage.basePrice + (values.usage === "comercial" ? COMMERCIAL_SURCHARGE : 0);

    // Al presionar "Ver Planes y Precios" se entrega todo al padre.
    const handleSubmit = () => onContinue?.({ category, ...values, price });

    return (
        <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
            <Header />

            {/* pt-16 / lg:pt-20 = alto del header fijo · pb-20 deja lugar a la bottom nav en mobile */}
            <main className="w-full pt-16 lg:pt-20 pb-20 lg:pb-0">
                <Hero category={category} onCategoryChange={setCategory} />

                <div className="w-full max-w-360 mx-auto px-space-md lg:px-gutter-desktop py-space-md lg:py-space-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-space-2xl items-start">
                        {/* Columna izquierda: paso + formulario.
                En mobile ambos forman UNA sola tarjeta; en escritorio son dos. */}
                        <div className="lg:col-span-7 flex flex-col lg:gap-space-xl rounded-2xl lg:rounded-none bg-surface-container-lowest lg:bg-transparent shadow-sm lg:shadow-none">
                            <StepHeader />
                            <VehicleForm
                                values={values}
                                setValues={setValues}
                                price={price}
                                onSubmit={handleSubmit}
                                BRANDS={BRANDS}
                                LABEL={LABEL}
                                FIELD={FIELD}
                                formatPrice={formatPrice}
                            />
                        </div>

                        {/* Mobile: tarjeta de chat debajo del formulario */}
                        <div className="lg:hidden">
                            <ChatCard />
                        </div>

                        {/* Escritorio: sidebar sticky */}
                        <Sidebar
                            price={price}
                            onSubmit={handleSubmit}
                            formatPrice={formatPrice}
                            PARTNERS={PARTNERS}
                        />
                    </div>
                </div>
            </main>

            <Footer />
            {/* <BottomNav /> */}
        </div>
    );
}