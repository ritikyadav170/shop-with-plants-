import Navbar from './components/Navbar';
import PlantsVariety from './components/PlantsVariety';
import SuitablePlants from './components/SuitablePlants';
import Benefit from './components/Benefit';
import GalleryView from './components/GalleryView';
import AboutPage from './components/AboutPage';
import Envelope from './components/Envelope';
import BlogCard from './components/BlogCard';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
     <SuitablePlants />
     <PlantsVariety />
    <Benefit />
    <GalleryView />
    <AboutPage />
    <Envelope />
    <BlogCard />
    <Footer />
    </>
  );
}

export default App;
