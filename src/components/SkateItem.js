import '../styles/SkateItem.css'

function handleClick(name) {
    console.log(`test ${name}`)
}

function SkateItem({ name, cover, isBestSale, isSpecialOffer, price }) {
    return (
        <li className='wg-skate-item' onClick={() => handleClick(name)}>
            <span className='wg-skate-item-price'>{price}</span>
            <img className='wg-skate-item-cover' src={cover} alt='image'></img>
            {name}
            {isSpecialOffer && <div className='wg-skate-item-sale'>🔥 EN SOLDE 🔥</div>}
            {isBestSale && <div className='wg-skate-item-fast'>Se vend vite</div>}
        </li>
    )
}

export default SkateItem