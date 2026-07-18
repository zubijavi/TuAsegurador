import girasol from "../assets/Girasol.jpg";
import DolarBNA from "../components/DolarBNA/DolarBNA";
import Formulario from "../components/Formulario";



export default function SeguroAgro() {


    return (

        <main className="bg-gray-100 ">



            {/* HERO */}

            <section

                className="relative h-[20vh] bg-cover bg-center flex items-center"

                style={{
                    backgroundImage: `url(${girasol})`
                }}

            >


                <div className="absolute inset-0 bg-black/60" />



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


  <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">

  {/* IZQUIERDA: CONTENIDO */}
  <div>

    <h2 className="text-3xl font-bold text-gray-800 mb-10">
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

  </div>

  {/* DERECHA: COTIZADOR */}
  <div className="bg-white shadow rounded-xl p-6">

    <h3 className="text-xl font-bold mb-4">
      Cotizá tu seguro agrícola
    </h3>

    <Formulario type="agro" />

    <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
      Enviar solicitud
    </button>

  </div>

</section>



        </main>

    )

}