import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {

    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className="wg-cart">
            <button
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <h1>Panier</h1>
            ) : (
                null
            )}



        </div>
    ) : (
        <div>
            <button
                onClick={() => setIsOpen(true)}
            >
                Ouvrir
            </button>
        </div>
    )
}

export default Cart