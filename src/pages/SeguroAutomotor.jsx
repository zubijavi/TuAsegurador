import Cotizador from "../components/Cotizador";
import auto from "../assets/auto.jpg";

export default function SeguroAutomotor() {
    return (
        <>
            {/* HERO */}

            <section

                className="relative h-[20vh] bg-cover bg-center flex items-center"

                style={{
                    backgroundImage: `url(${auto})`
                }}

            >


                <div className="absolute inset-0 bg-black/60" />



                <div className="relative z-10 px-6 lg:px-32 text-white">


                    <h1 className="text-4xl font-bold mb-4">

                        Seguro Automotor

                    </h1>


                    <p className="max-w-xl text-lg text-slate-200">

                        Amplia gama de coberturas con las mejores aseguradoras.

                    </p>


                </div>



            </section>
            <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

                {/* INFO */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        Seguro Automotor
                    </h1>

                    <p className="text-gray-600">
                        Coberturas adaptadas a tu vehículo.
                    </p>
                </div>

                {/* FORMULARIO */}
                <div className="bg-white shadow rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-4">
                        Cotizá tu seguro
                    </h2>

                    <Cotizador type="auto" />

                    <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg">
                        Enviar solicitud
                    </button>
                </div>

            </main>
        </>
    );
}