const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    type: String,
    img: String,
    foodName: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true,
    },
    weight: String,
    ingredients: [String],
    price: Number,
});

const FoodModel = mongoose.model("Food", foodSchema);

module.exports = FoodModel;
