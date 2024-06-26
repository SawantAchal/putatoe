import Header from "./components/Header";
import MainCarousel from "./components/MainCarousel";
import Navbar from "./components/Navbar";
import BeveragesCarousel from './components/BeveragesCarousel'
import DairyProductCarousel from './components/DairyProductCarousel'
import DairyProduct from './data/DairyProduct'
import Beverages from './data/Beverages'
import Footer from "./components/Footer";
import AllSubServices from "./components/AllSubServices";
import FruitCarousel from "./components/FruitCarousel";
import FruitData from "./data/FruitData";
import VegConatctcarousel from "./components/VegConatctcarousel";
import GroceryContactCarousel from "./components/GroceryContactCarousel";
import DairyContactCarousel from "./components/DairyContactCarousel";
import ContactData from './data/ContactData'
import ShopByCategory from "./pages/ShopByCategory";
import OfferData from "./data/OfferData";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <MainCarousel/>
      <BeveragesCarousel data={Beverages}/>
      <DairyProductCarousel data={DairyProduct} />
      <AllSubServices/>
      <FruitCarousel data={FruitData}/>
      <VegConatctcarousel items={ContactData}/>
      <GroceryContactCarousel items={ContactData}/>
      <DairyContactCarousel items={ContactData}/>
      <ShopByCategory data={OfferData}/>
      <Footer/>
    </>
  );
}

export default App;
