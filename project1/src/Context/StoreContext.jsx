import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemid) => {
        if (!cartItems[itemid]) {
            setCartItems((prev) => ({ ...prev, [itemid]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
    }

    const removeFromCart = (itemid) => {
        // subtract one from the cart item count for the given itemid
        // if the count goes to zero, remove the item from the cartItems object
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            newCartItems[itemid] = newCartItems[itemid] - 1;
            if (newCartItems[itemid] === 0) {
                delete newCartItems[itemid];
            }
            return newCartItems;
        });
    }
    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                TotalAmount = TotalAmount + itemInfo.price * cartItems[item];
            }

        }
        return TotalAmount;
    }
    const contextvalue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;