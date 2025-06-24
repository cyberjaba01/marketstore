import './Card.css'
import './CardSection.css'
import { initProductsProps } from '../../hooks/initProductsProps';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function CardSection() {
    const productsProps = initProductsProps();

    return (
        <section className='section-cards'>
            <div className='section__card-container'>
                {productsProps.map(productProps => 
                {
                    return <Card key={productProps.id} card={productProps}/>
                })}
            </div>
        </section>
    )
}

function Card({card}) {  
    const { addItem } = useContext(CartContext);

    return (
        <div className="card">
            <div className="card__media">
                <div className="card__image"/>
                <span className="card__discount-badge">-{card.discount}%</span>
            </div>

            <div className="card__body">
                <h3 className="card__title">{card.title}</h3>
                <p className="card__origin">{card.origin}</p>

                <div className="card__pricing">
                    <span className="card__price card__price-old">{card.oldPrice.toFixed(2)}$</span>
                    <span className="card__price card__price-curent">{card.price.toFixed(2)}$</span>
                </div>
            </div>

            <button className="card__add-to-cart" onClick={() => addItem(card)}>Add to cart</button>
        </div>
    )
}



export default CardSection