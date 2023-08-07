import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MenuCollection from "../../components/MenuCollection";
import ProductsCard from "../../components/ProductsCard";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function ProductInforPage() {

    const [productDetail, setProductDetail] = useState(null)
    const [deliverOne, setDeliverOne] = useState(false)
    const [autoShip, setAutoShip] = useState(false)

    const id = useParams().id;

    // console.log(id)

    useEffect(() => {
        const getProductsDetail = async () => {
            const api = `/products/${id}`

            fetch(`http://localhost:7000` + api)
                .then(response => {
                    response.json()
                        .then(data => setProductDetail(data))
                        .catch(error => console.log(error))
                })


        }
        getProductsDetail()
    }, [])


    useEffect(() => {
        if (deliverOne) {
            setAutoShip(false);
        }
        if (autoShip) {
            setDeliverOne(false);
        }
    }, [deliverOne, autoShip]);

    return (
        <div>
            <Navbar/>
            {productDetail && (
                <div className="px-20">
                    <div className="pet-stock-text-color py-10 text-4xl font-semibold">
                        {productDetail.name}
                    </div>


                    <main className="flex flex-row ">
                        <div1 className="basis-1/4 border border-slate-200 rounded ">
                            <figure className="py-3 ">
                                <img src={productDetail.imageUrl} alt="Shoes"/>
                            </figure>
                        </div1>
                        <div2 className=" basis-2/4 grid border border-slate-200 rounded mx-8 px-5 ">
                            <div className="h-16  ">
                                <p className="py-4 font-medium ">
                                    Select Size:
                                    <div
                                        className="btn btn-ghost border-2 pet-stock-border-color ml-5 px-8 btn:hover:none">

                                        {productDetail.size}</div></p>
                                <hr/>
                                <div>
                                    <div className=" py-4 ">

                                        <div
                                            className="w-full btn btn-ghost   px-8 h-20">
                                            <label className="cursor-pointer label">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-success"
                                                    checked={deliverOne}
                                                    onChange={()=>setDeliverOne(!deliverOne)}/>
                                                {productDetail.price}
                                            </label>

                                           </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=" py-4 ">

                                        <div
                                            className="w-full btn btn-ghost border-2  px-8 h-20">
                                            <label className="cursor-pointer label">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-success"
                                                    checked={autoShip}
                                                    onChange={()=>setAutoShip(!autoShip)}/>
                                                {productDetail.size}
                                            </label>
                                           </div>

                                    </div>
                                </div>
                            </div>




                        </div2>
                        <div3 className="basis-1/4">
                            <MenuCollection/>
                        </div3>
                    </main>

                </div>
            )}
            <Footer/>
        </div>
    )

}