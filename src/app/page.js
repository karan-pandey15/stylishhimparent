 
import Navbar from './coponents/Navbar';
import Carousel from './coponents/Carousel';
import Footer from './coponents/Footer';
import About from './pages/About';
import Contact from './pages/contact/page';
import HomeHero from './coponents/HomeHero';
export default function Home() {
 return (
   <div>
    <Navbar />
    <Carousel />
    <HomeHero />
    <About /> 
    <Footer />
   </div>
 );
}
