import React from 'react'
import "./Add.css"
import { assets } from "../../assets/assets"
const Add = () => {
    return (
        <div className="add">
            <form className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>
                        Upload Image
                    </p>
                    <label htmlFor="image">
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type="file" id="image" hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input type="text" name="name" placeholder='Type here' required />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea name="description" rows="6" placeholder='write content here' required />
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product-category</p>
                        <select name="category" required>
                            <option value="Salad"></option>
                            <option value="Rolls"></option>
                            <option value="Desert"></option>
                            <option value="Sandwich"></option>
                            <option value="Cake"></option>
                            <option value="Pure veg"></option>
                            <option value="Pasta"></option>
                            <option value="Noodles"></option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input type="number" name="price" placeholder='$20' required />
                    </div>
                </div>
                <div className="add-btn">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Add