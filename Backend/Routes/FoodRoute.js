import express from 'express';
import { addFood, listFood, removeFood } from '../Controllers/FoodController.js';
import multer from 'multer';
const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "Uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const uploads = multer({ storage: storage })
foodRouter.post("/add", uploads.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove/:id", removeFood);
export default foodRouter;