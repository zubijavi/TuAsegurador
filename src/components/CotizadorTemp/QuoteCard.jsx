import { useState } from "react";

import axios from "axios";



const BACKEND = "https://backcoti.onrender.com/api/contrataciones";



function money(value) {

    return Number(value).toLocaleString("es-AR", {

        style: "currency",

        currency: "ARS",

        maximumFractionDigits: 0

    });

}



export default function QuoteCard({ quote, vehicle, location }) {



    const [showPhone, setShowPhone] = useState(false);

    const [phone, setPhone] = useState("");

    const [sending, setSending] = useState(false);

    const [message, setMessage] = useState("");



    async function enviar() {

        if (!phone) {

            setMessage("Ingresá un teléfono.");

            return;

        }

        try {

            setSending(true);

            const payload = {

                quote,

                vehicle,

                location: {

                    zipCode: location.codpos,

                    localidad: location.localidad,

                    provincia: location.provincia

                },

                client: {

                    firstName: "Carlos",

                    lastName: "Menem",

                    email: "elcarlom@gmail.com",

                    phone

                },

                timestamp: new Date().toISOString()

            };

            await axios.post(BACKEND, payload);

            setMessage("Solicitud enviada correctamente.");

        } catch {

            setMessage("No se pudo enviar la solicitud.");

        } finally {

            setSending(false);

        }

    }



    function getHighlights(plan) {

        if (plan.includes("Resp. Civil")) return ["Responsabilidad Civil"];

        if (plan.includes("Terceros Completo sin Granizo"))

            return ["Robo Parcial", "Incendio Parcial", "Cristales", "Sin cobertura de granizo"];

        if (plan.includes("Terceros Completo"))

            return ["Robo Parcial", "Incendio Parcial", "Cristales", "Granizo"];

        if (plan.includes("Terceros Premium"))

            return ["Robo Parcial", "Incendio Parcial", "Granizo", "Cristales y Cerraduras"];

        if (plan.includes("Todo Riesgo c/Franquicia 5%"))

            return ["Daños Totales y Parciales", "Franquicia 5%", "Granizo", "Cristales"];

        if (plan.includes("Todo Riesgo c/Franquicia 8%"))

            return ["Daños Totales y Parciales", "Franquicia 8%", "Granizo", "Cristales"];

        return quote.highlights || [];

    }



    const highlights = getHighlights(quote.planName);



    return (

        <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-[#f0f3f4] p-5">



            <div className="flex justify-between items-start">

                <div>

                    <div className="text-[#234d6d] font-bold text-base">{quote.insurer}</div>

                    <div className="text-sm text-gray-500">{quote.planName}</div>

                </div>



                <div className="text-right">

                    {quote.originalPrice && (

                        <div className="text-xs text-gray-400 line-through">

                            {money(quote.originalPrice)}

                        </div>

                    )}

                    <div className="text-xl font-bold text-[#111518]">

                        {money(quote.price * .9)}

                    </div>

                </div>

            </div>



            <div className="flex flex-wrap gap-2 mt-3">

                {quote.categoryLabel && (

                    <span className="text-xs font-medium text-[#234d6d] bg-[#234d6d]/10 rounded-full px-3 py-1">

                        {quote.categoryLabel}

                    </span>

                )}

                {quote.hasPromotion && (

                    <span className="text-xs font-medium text-white bg-blue-950 rounded-full px-3 py-1">

                        {quote.promotionLabel}

                    </span>

                )}

            </div>



            {highlights.length > 0 && (

                <div className="flex flex-wrap gap-2 mt-3">

                    {highlights.map((h, i) => (

                        <span

                            key={i}

                            className="text-xs text-gray-600 border border-[#f0f3f4] rounded-full px-3 py-1"

                        >

                            {h}

                        </span>

                    ))}

                </div>

            )}



            <div className="text-sm text-gray-500 mt-4">

                Suma asegurada{" "}

                <strong className="text-[#111518]">{money(quote.insuredValue)}</strong>

            </div>



            {!showPhone && (

                <button

                    onClick={() => setShowPhone(true)}

                    className="mt-4 w-full bg-blue-950 hover:bg-blue-900 text-white text-sm font-bold

                               h-10 px-6 rounded-full transition-all shadow-md hover:shadow-lg

                               transform hover:-translate-y-0.5"

                >

                    Contratar

                </button>

            )}



            {showPhone && (

                <>

                    <div className="flex gap-2 mt-4">

                        <input

                            type="text"

                            placeholder="Tu teléfono"

                            value={phone}

                            onChange={e => setPhone(e.target.value)}

                            className="flex-1 border border-[#f0f3f4] rounded-lg px-3 py-2 text-sm

                                       focus:outline-none focus:border-[#234d6d]"

                        />

                        <button

                            disabled={sending}

                            onClick={enviar}

                            className="bg-blue-950 hover:bg-blue-900 disabled:opacity-50 text-white

                                       text-sm font-bold px-5 rounded-full transition-all shadow-md

                                       hover:shadow-lg transform hover:-translate-y-0.5"

                        >

                            {sending ? "Enviando..." : "Enviar"}

                        </button>

                    </div>

                    <div className="text-xs text-gray-500 mt-2">

                        Te vamos a contactar a la brevedad.

                    </div>

                </>

            )}



            {message && (

                <div className="text-sm font-medium text-[#234d6d] mt-3">

                    {message}

                </div>

            )}



        </div>

    );

}