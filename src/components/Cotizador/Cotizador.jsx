import { useEffect, useState } from "react";

import Filters from "./Filters";
import Ticket from "./Ticket";
import QuoteList from "./QuoteList";

import "./cotizador.css";


import {
    getYears,
    getBrands,
    getModels,
    getVersions,
    getLocation,
    quote
} from "./api";

export default function Cotizador() {

    const [years, setYears] = useState([]);
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [versions, setVersions] = useState([]);

    const [year, setYear] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [version, setVersion] = useState("");

    const [cp, setCp] = useState("");

    const [location, setLocation] = useState(null);

    const [quotes, setQuotes] = useState([]);

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState("");

    useEffect(() => {

        async function cargar() {

            const res = await getYears();

            setYears(res.data);

        }

        cargar();

    }, []);
    useEffect(() => {

        if (!year) return;

        async function cargar() {

            setLoading(true);

            const res = await getBrands(year);

            setBrands(res.data);

            setLoading(false);

        }

        cargar();

    }, [year]);
    useEffect(() => {

        if (!brand) return;

        async function cargar() {

            const res = await getModels(year, brand);

            setModels(res.data);

        }

        cargar();

    }, [brand]);
    useEffect(() => {

        if (!model) return;

        async function cargar() {

            const res = await getVersions(year, brand, model);

            setVersions(res.data);

        }

        cargar();

    }, [model]);

    useEffect(() => {

        if (cp.length !== 4) return;

        async function buscar() {

            try {

                const res = await getLocation(cp);

                setLocation(res.data[0]);

            }

            catch {

                setLocation(null);

            }

        }

        buscar();

    }, [cp]);

    async function cotizar() {

        const v = versions.find(
            x => x.description === version
        );

        if (!v || !location) return;

        try {

            setLoading(true);
            setStatus("Consultando cotizaciones...");

            const body = {
                client: {
                    firstName: "Carlos",
                    lastName: "Menem",
                    email: "elcarlom@gmail.com",
                    phone: "1143443600",
                    address: {
                        zipCode: location.codpos,
                        city: location.localidad,
                        locality: location.localidad
                    }
                },
                vehicle: {
                    brand,
                    model,
                    year: Number(year),
                    version,
                    codigoInfoAuto: v.infoauto,
                    hasGNC: false,
                    isZeroKm: false
                }
            };

            const res = await quote(body);

            setQuotes(res.data.quotes || []);
            setStatus("");

        } catch (err) {

            console.error(err);

            setStatus("No se pudieron obtener las cotizaciones.");

        } finally {

            setLoading(false);

        }

    }

    return (

        <>
            <Filters

                years={years}
                brands={brands}
                models={models}
                versions={versions}

                year={year}
                brand={brand}
                model={model}
                version={version}

                setYear={setYear}
                setBrand={setBrand}
                setModel={setModel}
                setVersion={setVersion}

                cp={cp}
                setCp={setCp}

            />

            <Ticket

                year={year}
                brand={brand}
                model={model}
                version={version}
                location={location}

            />


            {
                version && location && (
                    <div className="card" style={{ marginTop: "16px" }}>

                        <button
                            className="btn"
                            onClick={cotizar}
                            disabled={loading}
                        >
                            {loading ? "Cotizando..." : "Cotizar seguro"}
                        </button>

                        {status && (
                            <div className="status">
                                {status}
                            </div>
                        )}

                    </div>
                )
            }

            <QuoteList
                quotes={quotes}
                vehicle={{
                    brand,
                    model,
                    year: Number(year),
                    version,
                    infoauto: versions.find(
                        v => v.description === version
                    )?.infoauto
                }}
                location={location}
            />

        </>

    );

}