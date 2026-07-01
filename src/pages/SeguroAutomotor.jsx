import auto from "../assets/auto.jpg";

export default function SeguroAutomotor() {

    return (

        <main className="min-h-screen bg-gray-100">


            {/* HERO */}

            <section
                className="relative h-[20vh] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage:`url(${auto})`
                }}
            >

                <div className="absolute inset-0 bg-black/60"/>


                <div className="relative z-10 px-6 lg:px-32 text-white">

                    <h1 className="text-4xl font-bold mb-4">
                        Seguro Automotor
                    </h1>


                    <p className="max-w-xl text-lg text-slate-200">
                        Protegé tu vehículo con coberturas adaptadas a tus necesidades.
                    </p>


                </div>


            </section>





            {/* INFORMACION */}

            <section className="max-w-6xl mx-auto px-6 py-16">


                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">

                    Coberturas disponibles

                </h2>




                <div className="grid md:grid-cols-3 gap-6">


                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-xl mb-3">
                            Responsabilidad Civil
                        </h3>

                        <p className="text-gray-600">
                            Protección obligatoria y respaldo ante terceros.
                        </p>

                    </div>




                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-xl mb-3">
                            Robo e incendio
                        </h3>

                        <p className="text-gray-600">
                            Cobertura ante pérdidas parciales o totales.
                        </p>

                    </div>





                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-xl mb-3">
                            Todo Riesgo
                        </h3>

                        <p className="text-gray-600">
                            Mayor protección para tu vehículo.
                        </p>

                    </div>


                </div>


            </section>



        </main>

    )

}