import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CardProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const total = cartList.reduce((accumulator, item) => accumulator + (item.price * item.stock), 0);

    function addItem(cardProps) {
        setCartList(prevElems => {
            const existingItem = prevElems.find(item => item.id === cardProps.id);

            if (existingItem) {
                if (existingItem.stock >= cardProps.quantity) {
                    return prevElems
                } 
                else {
                    return prevElems.map(prevElem => 
                        prevElem.id === cardProps.id
                        ? {...prevElem, stock: prevElem.stock + 1}
                        : prevElem)
                }
            }            
            else {
                return [...prevElems, {...cardProps, stock: 1}]
            }
        })
    }

    function removeItem(cardProps) {
        setCartList(prevElems => {

           if (cardProps.stock == 1) {
                return prevElems.filter(item => item.id !== cardProps.id);
            }

            return prevElems.map(prevElem => 
                prevElem.id === cardProps.id
                ? {...prevElem, stock: prevElem.stock - 1}
                : prevElem
            );
        });
    }

    return (
        <CartContext.Provider
        value={{addItem, removeItem, cartList, total}}>
            {children}
        </CartContext.Provider>
    )
}