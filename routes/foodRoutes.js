const express = require("express");
const foodController = require("../controllers/foodControllers");
const router = express.Router();

router.route("/").post(foodController.createFood);

router.route("/:id").get(foodController.getDataByType);

module.exports = router;
