import { model, models, Schema } from 'mongoose';


const ProductSchema = new Schema({
  title: {type:String , required:true}, // String is shorthand for {type: String}
  description:String,
  price: {type:Number, required:true},
});

export const Product = models.Product || model('Product',ProductSchema)