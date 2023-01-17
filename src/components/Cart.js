import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {

    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, skateType) => acc + skateType.amount * skateType.price,
        0
    )

    return isOpen ? (
        <div className="wg-cart">
            <button
                className='wg-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier :</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total} €</h3>
                    <button onClick={()=>updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <h2>Panier vide</h2>
            )}
        </div>
    ) : (
        <div className='wg-cart-closed'>
            <button
                className='wg-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart