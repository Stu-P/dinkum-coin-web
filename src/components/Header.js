import React from 'react'
import  '../styles/Header.css'
import piggy from '../images/piggy.svg'

const Header = props =>

<div className="App">
<header className="App-header">
<img src={piggy} className="piggy-logo" alt="piggy" />

  <h1 className="App-title">Welcome to Dinkum Coin</h1>
</header>
</div>

export default Header