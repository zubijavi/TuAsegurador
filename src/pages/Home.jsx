import Header from '../components/Header';
import Footer from '../components/Footer';
import underConst from '../assets/underConst.jpg'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <h2>Pagina En Construccion</h2> */}
        <img src={underConst} alt="" />
        {/* Más contenido acá */}
      </main>
      <Footer />
    </>
  );
}
