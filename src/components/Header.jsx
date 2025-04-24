import React from 'react'
import '../styles/Header.scss'

function Header() {
  return (
    <header className="header">
    
        <nav className="header_nav">
            <div className="header_nav_icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* añadir animación menu codepen (css y js)  */}

            <ul className="header_nav_menu hidden">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre la creadora</a></li>
                <li><a href="#">Sobre el test</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <div className="header_timer hidden">
            15
            {/* añadir temporizador con js  */}
        </div>
    </header>
  )
}

export default Header