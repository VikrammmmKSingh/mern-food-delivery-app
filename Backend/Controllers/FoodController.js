import foodModel from "../Models/FoodModels.js";
import fs from "fs";

// add food items
const addFood = async (req, res) => {
    let image_filename = `${req.file.name}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try {
        await food.save();
        res.status(200).json({ message: "Food added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// list food
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// remove food
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.params.id);
        fs.unlink(`./Uploads/${food.image}`, () => { });
        await foodModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Food removed successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { addFood, listFood, removeFood };