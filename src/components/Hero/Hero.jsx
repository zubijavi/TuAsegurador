import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import auto from "../../assets/auto.jpg";
import girasol from "../../assets/Girasol.jpg";


const slides = [
    {
        image: auto,
        badge: "Seguros para vehiculos",
        title: "Seguro Automotor",
        description:
            "Amplia gama de coberturas con las mejores aseguradoras.",
        button: "Cotizar",
        type: "auto"
    },
    {
        image: girasol,
        badge: "Agro",
        title: "Seguros Agricolas",
        description:
            "Seguros agrícolas adaptados a cada campaña.",
        button: "Cotizar",
        type: "agro"
    }
];



const Hero = () => {


    const navigate = useNavigate();


    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const [modal, setModal] = useState(false);



    // AUTOPLAY PAUSADO CUANDO ABRE MODAL

    useEffect(() => {


        if(modal) return;


        const timer = setInterval(() => {


            setFade(false);


            setTimeout(() => {

                setCurrent(prev => 
                    (prev + 1) % slides.length
                );

                setFade(true);


            },400);



        },18000);



        return () => clearInterval(timer);



    },[modal]);





    const next = () => {


        setFade(false);


        setTimeout(()=>{


            setCurrent(prev =>
                (prev + 1) % slides.length
            );


            setFade(true);


        },400);


    };





    const prev = () => {


        setFade(false);


        setTimeout(()=>{


            setCurrent(prev =>
                (prev - 1 + slides.length) % slides.length
            );


            setFade(true);


        },400);


    };







    return (


        <main className="relative min-h-[70vh] md:min-h-[60vh] w-full flex items-center py-6 overflow-hidden">



            {/* BACKGROUND */}


            <div className="absolute inset-0 z-0">


                <div

                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                        fade
                        ? "opacity-100"
                        : "opacity-0"
                    }`}


                    style={{

                        backgroundImage:
                        `url(${slides[current].image})`

                    }}

                />


                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"/>


            </div>







            {/* CONTENIDO */}



            <div

                className={`relative z-10 w-full px-6 lg:px-32 max-w-7xl transition-all duration-700 ${
                    fade
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}

            >



                <h2 className="text-3xl text-white font-bold mb-6">

                    {slides[current].title}

                </h2>



                <p className="text-slate-200 text-lg max-w-lg mb-10">

                    {slides[current].description}

                </p>





                <div className="flex gap-4">



                    {/* COTIZAR */}


                    <button


                        onClick={() => setModal(true)}


                        className="min-w-32 h-10 bg-white/10 border border-white/20 text-white rounded-lg font-bold hover:bg-white/20 transition cursor-pointer"


                    >

                        {slides[current].button}


                    </button>







                    {/* MAS INFO */}



                    <button


                        onClick={() => {


                            if(slides[current].type === "auto"){

                                navigate("/seguro-automotor");

                            }else{

                                navigate("/seguro-agro");

                            }


                        }}



                        className="min-w-32 h-10 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/60 hover:shadow-primary/40 transition-all hover:-translate-y-1 cursor-pointer"


                    >


                        Más Info


                    </button>



                </div>




            </div>









            {/* FLECHAS */}



            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-10 z-20">



                <button

                    onClick={prev}

                    className="size-8 rounded-full bg-white/10 border border-white/20 text-white cursor-pointer"

                >

                    ‹

                </button>





                <button

                    onClick={next}

                    className="size-8 rounded-full bg-white/10 border border-white/20 text-white cursor-pointer"

                >

                    ›

                </button>



            </div>









            {/* MODAL COTIZACION */}




            {modal && (


                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">



                    <div className="bg-white rounded-xl p-8 w-full max-w-md">



                        <h3 className="text-2xl font-bold mb-6 text-gray-800">


                            Cotizar {

                            slides[current].type === "auto"
                            ? "Seguro Automotor"
                            : "Seguro Agro"

                            }


                        </h3>






                        {

                        slides[current].type === "auto"

                        ?


                        <div className="flex flex-col gap-3">


                            <input
                            className="border p-3 rounded"
                            placeholder="Año del vehículo"
                            />


                            <input
                            className="border p-3 rounded"
                            placeholder="Marca"
                            />


                            <input
                            className="border p-3 rounded"
                            placeholder="Modelo"
                            />


                            <input
                            className="border p-3 rounded"
                            placeholder="Código Postal"
                            />



                            <select className="border p-3 rounded">


                                <option>
                                    ¿Tiene GNC?
                                </option>


                                <option>
                                    Si
                                </option>


                                <option>
                                    No
                                </option>


                            </select>



                            <input
                            className="border p-3 rounded"
                            placeholder="Contacto"
                            />


                        </div>



                        :



                        <div className="flex flex-col gap-3">


                            <input
                            className="border p-3 rounded"
                            placeholder="CUIT"
                            />


                            <input
                            className="border p-3 rounded"
                            placeholder="Provincia"
                            />


                            <input
                            className="border p-3 rounded"
                            placeholder="Partido"
                            />


                            <input
                            className="border p-3 rounded"
                            placeholder="Cultivo"
                            />


                            <input
                            className="border p-3 rounded"
                            placeholder="Suma Asegurada"
                            />


                        </div>

                        }







                        <button

                        className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg cursor-pointer"

                        >

                            Enviar solicitud


                        </button>





                        <button


                        onClick={()=>setModal(false)}


                        className="w-full mt-3 text-gray-500 cursor-pointer"


                        >

                            Cerrar


                        </button>




                    </div>


                </div>


            )}



        </main>


    );

};



export default Hero;