
import Navbar from "../components/Navbar";
import BannerHome from "../components/BannerHome";
import Footer from "../components/Footer";
import ProductsCardSale from "../components/ProductsCardSale";

const Home = () => {


    return (
        <div>
            <Navbar/>
            <BannerHome/>
            <div>
                <h1 className="py-10 pl-48 text-2xl font-semibold">
                    Get more for less with Petstock
                </h1>
                <ProductsCardSale />
            </div>

            <Footer/>
        </div>
    )
}
export default Home
