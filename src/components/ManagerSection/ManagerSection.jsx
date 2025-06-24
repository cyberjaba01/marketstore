import './ManagerSection.css'
import ShoppingCart from './ShoppingCart.jsx'
import { initProductsProps } from '../../hooks/initProductsProps.jsx'
import { useState } from 'react';

export default function ManagerSection() {
    var NewName;
    const [lineState, setLineState] = useState(null);

    function editProductProps(productProps) {
        if (lineState) return console.log("Deactivate previous changes");
        
        setLineState(productProps.id);
    }

    function applyProductProps(productProps) {
        console.log(lineState);
        
        setLineState(null);
    }

    var productsProps = initProductsProps();

    return (
    <section className='section-controls'>
        <div className='controls-body'>
            {/* <div className="controls-body__search-container">
                <span>Type name of the product item</span>
                <input type="text" />
            </div> */}
            <div className="controls-body__items-container">
                <div className="items-container__item">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Current price</th>
                                <th>Old price</th>
                                <th>Discount</th>
                                <th>Available</th>
                                <th>Reserved</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsProps.map(productProps => {
                                return (
                                    <tr className='items-container__item-info' key={productProps.id}>
                                        <td><input className='items-container__item-props' type="text" defaultValue={productProps.title} readOnly={lineState !== productProps.id}/> </td>
                                        <td>{(productProps.price - productProps.price * (productProps.discount / 100)).toFixed(2)}$</td>
                                        <td><input className='items-container__item-props' type="text" defaultValue={(productProps.price).toFixed(2) + "$"} readOnly={lineState !== productProps.id} /> </td>
                                        <td><input className='items-container__item-props' type="text" defaultValue={productProps.discount} readOnly={lineState !== productProps.id} /> </td>
                                        <td><input className='items-container__item-props' type="text" defaultValue={productProps.available} readOnly={lineState !== productProps.id}/> </td>
                                        <th>{productProps.reserved}</th>
                                        <td>{lineState === productProps.id ? (
                                            <>
                                                <button className='item-info__apply'>Apply</button> <button className='item-info__cancel' onClick={() => applyProductProps(productProps)}>Cancel</button>
                                            </>
                                            ) : (<button className='item-info__edit' onClick={() => editProductProps(productProps)}>Edit</button>) }
                                        </td>
                                    </tr>)})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </section>)}

