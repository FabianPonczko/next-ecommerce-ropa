import Layout from "@/components/layout";
import ProductForm from "@/components/productForm";
import axios  from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Editproduct(){
    const [productInfo,setProductinfo] = useState(null)
    const router = useRouter()
    const {id} = router.query
   
    useEffect(()=>{
        if(!id){
            return
        }
        axios.get("/api/products?id="+id).then(response=>{
            setProductinfo(response.data)
        })
        
    },[id])
    

    async function updateProduct(event){
        event.preventDefault()
        const data = {title,description,price,id}
        await axios.put("../api/products",data)
        }

    return(
        <Layout>
            <h1>Edit Product</h1>
            {productInfo && (
                <ProductForm {...productInfo} />
            )}
        </Layout>
    )
}