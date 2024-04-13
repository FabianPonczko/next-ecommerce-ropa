import { Product } from "@/models/products"
import  Mongoose  from "mongoose"

export function mongooseConnect(){
    if(Mongoose.connection.readyState===1){
    return Mongoose.connection.asPromise()
    }else{
        const uri= process.env.MONGODB_URI
    return Mongoose.connect(uri)
    }

s
}