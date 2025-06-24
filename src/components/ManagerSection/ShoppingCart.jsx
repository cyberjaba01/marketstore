import './ShoppingCart.css'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useState } from 'react';

export default function ShoppingCart() {
    const { cartList, total, addItem, removeItem } = useContext(CartContext)

    function sendCartItems() {

        async function fetchRequest() {
            try {
                const response = await fetch(`http://localhost/marketstorewebsite/api/api.php/prods`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: 
                        JSON.stringify(cartList.map(item => ({
                            id: item.id,
                            stock: item.stock   
                        })))
                    })
            } catch (err) {console.log(err)}
        }
        fetchRequest();
    }

    return (
        <div className="container-shopping-cart">
            
            <div className="cart__head">
                <h2>Your cart:</h2>
            </div>
            
            <table className="cart-table">
                <tbody>
                    {
                    cartList.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className="text-center">{item.stock}</td>
                            <td className="text-right">{item.price.toFixed(2)}$</td>
                            <td className="action-buttons">
                                <button onClick={() => removeItem(item)}>−</button>
                                <button onClick={() => addItem(item)}>+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="cart__footer">
                <h2>Total: {total.toFixed(2)}$</h2>
                <button onClick={sendCartItems}>Order now</button>
            </div>

        </div>
    )
}