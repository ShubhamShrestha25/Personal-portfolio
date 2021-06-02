import React, { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)
    const show = () => {
        setOpen(open)
    }
    const remove = () => {
        setOpen(!open)
    }

    return (
        <header>
        <div className="frist-header">
            <nav className="nav bg-grid">
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu' onClick={show}></i>
                </div>

                <div>
                    <a href="#logo" className="nav__logo">SShresthA</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <div className="nav__close" id="nav-close">
                    <i className='bx bx-x' onClick={remove}></i>
                    </div>

                 <ul className="nav__list">
                     <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                     <li className="nav__item"><a href="#about" className="nav__link ">About</a></li>
                     <li className="nav__item"><a href="#skills" className="nav__link ">Skills</a></li>
                     <li className="nav__item"><a href="#service" className="nav__link ">Service</a></li>
                     <li className="nav__item"><a href="#works" className="nav__link ">Works</a></li>
                     <li className="nav__item"><a href="#contact" className="nav__link ">Contact</a></li>
                 </ul>
                </div>
            </nav>
        </div>
        </header>
    )
}

export default Header
