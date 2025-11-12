import sancorLogo from '../assets/companias/sancor.svg'
import prevencionLogo from '../assets/companias/prevencion.svg'
import bdsLogo from '../assets/companias/bds.png'
import integrityLogo from '../assets/companias/integrity.png'
import sancristobalLogo from '../assets/companias/sancristobal.png'
import cooperacionLogo from '../assets/companias/cooperacion.png'




import './Companias.css'


const companias = [
    { nombre: 'Sancor Seguros', logo: sancorLogo },
    { nombre: 'Prevencion ART', logo: prevencionLogo },
    { nombre: 'Banco del Sol', logo: bdsLogo },
    { nombre: 'Ingegrity Seguros', logo: integrityLogo },
    { nombre: 'San Cristobal Seguros', logo: sancristobalLogo },
    { nombre: 'Cooperacion Seguros', logo: cooperacionLogo },



    // Agregá más compañías acánc
];

const Companias = () => {
    return (
        <section className='cias'>
            <img src={sancorLogo} alt="" />
            <img src={prevencionLogo} alt="" />
            <img src={bdsLogo} alt="" />
            <img src={integrityLogo} alt="" />
            <img src={sancristobalLogo} alt="" />
            <img src={cooperacionLogo} alt="" />
        </section >
    );
};

export default Companias;
