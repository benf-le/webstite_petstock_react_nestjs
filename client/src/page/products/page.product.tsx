import Navbar from "../../components/Navbar";
import MenuCollection from "../../components/MenuCollection";
import Footer from "../../components/Footer";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


export default function PageProduct(){

    const [productPage, setProductPage] = useState(null)
    const id = useParams().id;

    // console.log(id)

    useEffect(() => {
        const getProductsDetail = async () => {
            const api = `/collections/${id}`

            fetch(`http://localhost:7000` + api)
                .then(response => {
                    response.json()
                        .then(data => setProductPage(data))
                        .catch(error => console.log(error))
                })


        }
        getProductsDetail()
    }, [])


    console.log(productPage)

    return (
        <div>
            <Navbar/>
            <div className="px-20">
                <div className="pet-stock-text-color py-10 text-5xl font-semibold">
                    DOG SUPPLIES
                </div>


                <main className="flex flex-row ">
                    <div1 className="basis-1/4">
                        <MenuCollection/>
                    </div1>
                    <div2 className=" basis-3/4 grid ">

                        <ProductsCard/>

                    </div2>
                </main>

            </div>
            <Footer/>
        </div>
    );
}