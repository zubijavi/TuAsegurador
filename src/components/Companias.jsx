import sancorLogo from '../assets/companias/sancor.svg'
import prevencionLogo from '../assets/companias/prevencion.svg'
import bdsLogo from '../assets/companias/bds.png'


import './Companias.css'


const companias = [
    { nombre: 'Sancor', logo: sancorLogo },
    { nombre: 'Prevencion', logo: prevencionLogo },
    { nombre: 'Federación Patronal', logo: bdsLogo },
    // Agregá más compañías acánc
];

const Companias = () => {
    return (
        <section className="py-8 px-4 bg-gray-100">
            {/* <h2 className="text-2xl font-bold text-center mb-6 text-white">Nos acompañan</h2> */}
            <div className="cias">
                {companias.map((compania, index) => (
                    <div key={index}>
                        <img
                            src={compania.logo}
                            alt={compania.nombre}
                            className="logosCias"
                        />
                    </div>
                ))}
            </div>




        </section>
    );
};

export default Companias;
