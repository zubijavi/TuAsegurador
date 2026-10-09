import { useEffect, useState, useRef } from "react";

import Filters from "./Filters";
import Ticket from "./Ticket";
import QuoteList from "./QuoteList";

import {
    getYears,
    getBrands,
    getModels,
    getVersions,
    getLocation,
    quote
} from "./api";

const PROGRESS_MESSAGES = [
    "Consultando aseguradoras...",
    "Revisando coberturas disponibles...",
    "Comparando precios...",
    "Verificando descuentos y promociones...",
       "Consultando aseguradoras...",
    "Revisando coberturas disponibles...",
    "Comparando precios...",
    "Verificando descuentos y promociones...",
    "Casi listo, un momento más..."
];

export default function Cotizador() {

    const [years, setYears] = useState([]);
    const [brands, setBrands] = useState([]);

    const [year, setYear] = useState("");
    const [brand, setBrand] = useState("");

    // Modelo + versión combinados
    const [modelVersions, setModelVersions] = useState([]);
    const [loadingModelVersions, setLoadingModelVersions] = useState(false);
    const [modelVersion, setModelVersion] = useState(""); // key seleccionada
    const [selectedMV, setSelectedMV] = useState(null); // { model, description, infoauto }

    // Código postal + localidades
    const [cp, setCp] = useState("");
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState(null);

    const [hasGNC, setHasGNC] = useState(false);

    const [quotes, setQuotes] = useState([]);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const [progressMsg, setProgressMsg] = useState(PROGRESS_MESSAGES[0]);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(null);

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

    // Al elegir marca: traigo modelos y sus versiones en paralelo
    useEffect(() => {

        if (!brand) return;

        async function cargar() {

            setLoadingModelVersions(true);
            setModelVersions([]);
            setModelVersion("");
            setSelectedMV(null);

            const resModels = await getModels(year, brand);
            const models = resModels.data;

            const results = await Promise.all(
                models.map(m => getVersions(year, brand, m))
            );

            const combined = [];

            models.forEach((m, i) => {
                const versions = results[i].data;
                versions.forEach(v => {
                    combined.push({
                        model: m,
                        description: v.description,
                        infoauto: v.infoauto
                    });
                });
            });

            setModelVersions(combined);
            setLoadingModelVersions(false);

        }

        cargar();

    }, [brand]);

    // Al elegir CP: traigo todas las localidades posibles
    useEffect(() => {

        if (cp.length !== 4) {
            setLocations([]);
            setLocation(null);
            return;
        }

        async function buscar() {
            try {
                const res = await getLocation(cp);
                setLocations(res.data || []);
                setLocation(null);
            } catch {
                setLocations([]);
                setLocation(null);
            }
        }

        buscar();

    }, [cp]);

    function startProgress() {

        let step = 0;
        setProgress(0);
        setProgressMsg(PROGRESS_MESSAGES[0]);

        progressRef.current = setInterval(() => {

            step += 1;

            setProgress(prev => Math.min(prev + 12, 92));

            if (step < PROGRESS_MESSAGES.length) {
                setProgressMsg(PROGRESS_MESSAGES[step]);
            }

        }, 2500);

    }

    function stopProgress() {

        if (progressRef.current) {
            clearInterval(progressRef.current);
            progressRef.current = null;
        }

        setProgress(100);

    }
    useEffect(() => () => stopProgress(), []);

    async function cotizar() {

        if (!selectedMV || !location) return;

        try {

            setLoading(true);
            setStatus("");
            startProgress();

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
                    model: selectedMV.model,
                    year: Number(year),
                    version: selectedMV.description,
                    codigoInfoAuto: selectedMV.infoauto,
                    hasGNC: hasGNC, // <-- Pasa el estado real
                    isZeroKm: false
                }
            };

            const res = await quote(body);
            setQuotes(res.data.quotes || []);

        } catch (err) {
            console.error(err);
            setStatus("No se pudieron obtener las cotizaciones.");
        } finally {
            stopProgress();
            setTimeout(() => setLoading(false), 400);
        }

    }

    const showResults = !loading && quotes.length > 0;

    return (

        <div className="w-[70%] mx-auto py-8">

            {/* VISTA 1: Formulario de Cotización / Filtros */}
            {!showResults && (
                <>
                    <Filters
                        years={years}
                        brands={brands}

                        year={year}
                        brand={brand}
                        setYear={setYear}
                        setBrand={setBrand}

                        modelVersions={modelVersions}
                        loadingModelVersions={loadingModelVersions}
                        modelVersion={modelVersion}
                        setModelVersion={key => {
                            setModelVersion(key);
                            const found = modelVersions.find(
                                mv => `${mv.model}|${mv.description}` === key
                            );
                            setSelectedMV(found || null);
                        }}

                        cp={cp}
                        setCp={setCp}
                        locations={locations}
                        location={location}
                        setLocation={setLocation}
                        hasGNC={hasGNC}
                        setHasGNC={setHasGNC}
                    />

                    {selectedMV && location && (
                        <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-[#f0f3f4] p-6 mt-4">
                            <button
                                onClick={cotizar}
                                disabled={loading}
                                className="w-full bg-blue-950 hover:bg-blue-900 disabled:opacity-50
                                           disabled:hover:translate-y-0 text-white text-sm font-bold
                                           h-10 px-6 rounded-full transition-all shadow-md
                                           hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                {loading ? "Cotizando..." : "Cotizar seguro"}
                            </button>

                            {loading && (
                                <div className="mt-4">
                                    <div className="w-full h-2 bg-[#f0f3f4] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#234d6d] rounded-full transition-all duration-500 ease-out"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <div className="text-sm font-medium text-[#234d6d] text-center mt-2">
                                        {progressMsg}
                                    </div>
                                </div>
                            )}

                            {!loading && status && (
                                <div className="text-sm font-medium text-red-600 text-center mt-3">
                                    {status}
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}

            {/* VISTA 2: Resultados de Cotización (Ticket + QuoteList) */}
            {showResults && (
                <div className="space-y-6">
                    <div className="flex justify-between items-center mb-2">
                        <button
                            onClick={() => setQuotes([])}
                            className="text-sm font-semibold text-[#234d6d] hover:underline flex items-center gap-1 pointer"
                        >
                            ← Modificar búsqueda
                        </button>
                    </div>

                    <Ticket
                        year={year}
                        brand={brand}
                        model={selectedMV.model}
                        version={selectedMV.description}
                        location={location}
                    />

                    <QuoteList
                        quotes={quotes}
                        vehicle={{
                            brand,
                            model: selectedMV.model,
                            year: Number(year),
                            version: selectedMV.description,
                            infoauto: selectedMV.infoauto
                        }}
                        location={location}
                    />
                </div>
            )}

        </div>

    );

}