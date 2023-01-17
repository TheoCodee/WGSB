import '../styles/App.css';

import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

import logo from '../assets/logo-WG.png'

import { useState } from 'react';


function App() {

  const [cart, updateCart] = useState([])

  return (
    <div>

      <Banner>
        <img className='wg-logo' src={logo}></img>
      </Banner>

      <div className='wg-layout'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>

    </div>
  )
}

export default App