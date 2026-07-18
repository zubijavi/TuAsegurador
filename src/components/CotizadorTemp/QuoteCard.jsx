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

export default function QuoteCard({
    quote,
    vehicle,
    location
}) {

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

        }

        catch {

            setMessage("No se pudo enviar la solicitud.");

        }

        finally {

            setSending(false);

        }

    }

    return (

        <div className="quote-card">

            <div className="quote-top">

                <div>

                    <div className="quote-insurer">

                        {quote.insurer}

                    </div>

                    <div className="quote-plan">

                        {quote.planName}

                    </div>

                </div>

                <div className="quote-price-block">

                    {

                        quote.originalPrice &&

                        <div className="quote-price-orig">

                            {money(quote.originalPrice)}

                        </div>

                    }

                    <div className="quote-price">

                        {money(quote.price)}

                    </div>

                </div>

            </div>

            {

                quote.categoryLabel &&

                <span className="quote-cat">

                    {quote.categoryLabel}

                </span>

            }

            {

                quote.hasPromotion &&

                <span className="quote-promo">

                    {quote.promotionLabel}

                </span>

            }

            {

                quote.highlights?.length > 0 &&

                <div className="quote-highlights">

                    {

                        quote.highlights.map((h, i) => (

                            <span key={i}>

                                {h}

                            </span>

                        ))

                    }

                </div>

            }

            <div className="quote-sum">

                Suma asegurada

                <strong>

                    {" "}

                    {money(quote.insuredValue)}

                </strong>

            </div>

            {

                !showPhone &&

                <button

                    className="quote-hire-btn"

                    onClick={() => setShowPhone(true)}

                >

                    Contratar

                </button>

            }

            {

                showPhone &&

                <>

                    <div className="quote-phone-form">

                        <input

                            type="text"

                            placeholder="Tu teléfono"

                            value={phone}

                            onChange={e => setPhone(e.target.value)}

                        />

                        <button

                            disabled={sending}

                            onClick={enviar}

                        >

                            {sending ? "Enviando..." : "Enviar"}

                        </button>

                    </div>

                    <div className="quote-phone-hint">

                        Te vamos a contactar a la brevedad.

                    </div>

                </>

            }

            {

                message &&

                <div className="status">

                    {message}

                </div>

            }

        </div>

    );

}