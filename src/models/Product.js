const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        require: true,
        type: String,
        unique: true
    },
    price: {
        type: String,
    },
}, {
    timestamps : true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

