import React from 'react'
import Header from './Header'
import '../styles/App.css'

const App = ({ children }) =>
  <div className='App'>
    <Header />
    <div className="container">
      {children}
    </div>
  </div>

export default App