import '../styles/ShoppingList.css'

import SkateItem from './SkateItem'

import { skateList } from '../data/skateList'


function ShoppingList() {

    const uniqueCategories = []

    skateList.forEach(skate => {
        if (!uniqueCategories.includes(skate.category)) {
            uniqueCategories.push(skate.category)
        }
    });

    function addToCart(name, price) {
        
    }

    return (
        <div className='wg-shopping-list'>
            {/* <h2>Catégories</h2>
            <ul>
                {
                    uniqueCategories.map((cat, id) => (
                        <li key={id}>{cat}</li>
                    ))
                }
            </ul> */}

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