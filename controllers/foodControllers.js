const FoodModel = require("../models/foodModel");
const catchAsync = require("../utils/catchAsync");

exports.createFood = catchAsync(async (req, res) => {
    const newFood = await FoodModel.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            food: newFood,
        },
    });
});

exports.getDataByType = catchAsync(async (req, res) => {
    const foodd = await FoodModel.find({ type: `${req.params.id}` });
    const parametri = req.params;
    res.status(201).json({
        status: "success",
        data: {
            food: foodd,
            param: parametri,
        },
    });
});
