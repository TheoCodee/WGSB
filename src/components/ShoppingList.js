import '../styles/ShoppingList.css'

import SkateItem from './SkateItem'

import { skateList } from '../data/skateList'


function ShoppingList({cart, updateCart}) {

    const uniqueCategories = []

    skateList.forEach(skate => {
        if (!uniqueCategories.includes(skate.category)) {
            uniqueCategories.push(skate.category)
        }
    })

    function addToCart(name, price) {
        //On teste si le produit selectionné est déjà dans le panier
        const currentSkateSaved = cart.find((skate) => skate.name === name)
        if (currentSkateSaved) {
            const cartFilteredCurrentSkate = cart.filter((skate) => skate.name !== name)
            updateCart([
                ...cartFilteredCurrentSkate, { name, price, amount: currentSkateSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount : 1 }])
        }
    }

    return (
        <div className='wg-shopping-list'>
            <h2>Catégories</h2>
            <ul>
                {
                    uniqueCategories.map((cat, id) => (
                        <li key={id}>{cat}</li>
                    ))
                }
            </ul>

            <ul className='wg-skate-list'>
                {skateList.map(({ name, id, cover, isBestSale, isSpecialOffer, price }) => (
                    <div key={id}>
                        <SkateItem
                            name={name}
                            cover={cover}
                            isBestSale={isBestSale}
                            isSpecialOffer={isSpecialOffer}
                            price={price}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter au panier</button>
                    </div>
                ))
                }
            </ul>

        </div>
    )
}

export default ShoppingList