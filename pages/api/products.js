
import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/models/products"


export default async function handler(req,res){
    const {method} =req
    await mongooseConnect()

    if (method==="GET"){
        if(req.query?.id){
            res.json(await Product.findById({_id:req.query.id}))
        }else{
            const respuesta =await Product.find()
            res.json(respuesta)
        }
    }
    if (method==="POST"){
        const {title,description,price}= req.body
        const productDoc = await Product.create({
            title,description,price
        })
        res.json(productDoc)
    }
    if (method==="PUT"){
        const {_id,title,description,price}= req.body
        const productUpdate = await Product.updateOne({_id},{title,description,price })
        res.json(productUpdate)
    }
    if (method==="DELETE"){
        if(req.query?.id){
        await Product.deleteOne({_id:req.query.id})
        res.json(true)
    }
    }
}