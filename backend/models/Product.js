const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0.0
    },
    stock: {
      type: Number,
      required: true
    },
    images: {
      type: Array,
      default: [] // Default boş alan
    },
    dicount: {
      type: Number,
      default: 0.0
    },
    colors: {
      type: Array,
      default: []
    },
    sizes: {
      type: Array,
      default: []
    },
    stockCode: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;