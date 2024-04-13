import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"

export default function ProductForm({
    _id,
    title:existTitle,
    description:existDescription,
    price:existPrice,})
{   
    const [title,setTitle] = useState(existTitle || "")
    const [description,setDescription] = useState(existDescription || "")
    const [price,setPrice] = useState(existPrice || '')
    const [gotoProducts,setGotoProducts]=useState(false)
    const route = useRouter()
    
    async function saveProduct(event){
        event.preventDefault()
        const data = {title,description,price}

        if(_id){
            try{
                await axios.put("/api/products",{...data,_id})
            }catch(e){
                console.log(e)
            }

        }else{
            
            await axios.post("/api/products",data)
        }
            setGotoProducts(true)
    }
    
    if (gotoProducts){
        route.push("/products")
    }


    return(

            <form onSubmit={saveProduct}>
                <label>Product name</label>
                <input 
                    type="text" placeholder="add new product"
                    value={title}
                    onChange={ev=>setTitle(ev.target.value)}
                    />
                <label>Description</label>
                <textarea placeholder="description"
                    value={description}
                    onChange={ev=>setDescription(ev.target.value)}
                    />
                <label>Price (in USD)</label>
                <input type="number" 
                    value={price}
                    onChange={ev=> setPrice(ev.target.value)}
                    />
                <button className="btn-primary" type="submit">Save</button>
            </form>
       
    )
}