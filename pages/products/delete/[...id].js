import Layout from "@/components/layout";
import ProductForm from "@/components/productForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProduct(){
    const [productInfo,setProductInfo] = useState()
    const router = useRouter()
    const {id} = router.query


    useEffect(()=>{
        if(!id){
            return
        }
        axios.get("/api/products?id="+id).then(response=>{
            setProductInfo(response.data)
        })
    },[id])

    function goBack(){
        router.push("/products")
    }
    
    async function deleteProduct(){
        axios.delete("/api/products?id="+id)
        goBack()
    }

    return(
        <Layout>
            <h1  className=" text-center">
                Do you want to delete {productInfo?.title} ?
            </h1> 
            <div className="flex justify-center gap-1">
                <button className="bg-red-600 rounded-md px-5 text-3xl text-white "
                    onClick={deleteProduct}
                >
                    Yes
                </button>
                <button className="bg-gray-600 rounded-md px-5 text-3xl text-white "
                onClick={goBack}
                >
                    No
                </button>
            </div>
        </Layout>
    )
}