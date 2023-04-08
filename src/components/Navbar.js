import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const Navbar = () => {
    
  return (
    <div>
        <header class="header">
            <div class="container">
                <div class="row flex-end">
                    <button class="nav-toggler" type="button">
                        <span></span>
                    </button>
                    <nav class="nav">
                        <div class="nav-inner">
                            <div className="links">
                                <Link to="/" > Shop </Link>
                                <Link to="/cart" > 🛒 </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
  )
}
