import girasol from "../assets/Girasol.jpg";
import DolarBNA from "../components/DolarBNA/DolarBNA";


export default function SeguroAgro(){


    return (

        <main className="min-h-screen bg-gray-100">



            {/* HERO */}

            <section

                className="relative h-[20vh] bg-cover bg-center flex items-center"

                style={{
                    backgroundImage:`url(${girasol})`
                }}

            >


                <div className="absolute inset-0 bg-black/60"/>



                <div className="relative z-10 px-6 lg:px-32 text-white">


                    <h1 className="text-4xl font-bold mb-4">

                        Seguro Agro

                    </h1>


                    <p className="max-w-xl text-lg text-slate-200">

                        Protección para tu producción agrícola en cada etapa de la campaña.

                    </p>


                </div>



            </section>

        <DolarBNA />




            {/* INFORMACION */}


            <section className="max-w-6xl mx-auto px-6 py-16">



                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">

                    Coberturas agrícolas

                </h2>





                <div className="grid md:grid-cols-3 gap-6">



                    <div className="bg-white rounded-xl shadow p-6">


                        <h3 className="font-bold text-xl mb-3">

                            Granizo

                        </h3>


                        <p className="text-gray-600">

                            Protección frente a eventos climáticos.

                        </p>


                    </div>





                    <div className="bg-white rounded-xl shadow p-6">


                        <h3 className="font-bold text-xl mb-3">

                            Cultivos

                        </h3>


                        <p className="text-gray-600">

                            Coberturas adaptadas a cada producción.

                        </p>


                    </div>





                    <div className="bg-white rounded-xl shadow p-6">


                        <h3 className="font-bold text-xl mb-3">

                            Asesoramiento

                        </h3>


                        <p className="text-gray-600">

                            Acompañamiento personalizado para tu campo.

                        </p>


                    </div>



                </div>


            </section>



        </main>

    )

}