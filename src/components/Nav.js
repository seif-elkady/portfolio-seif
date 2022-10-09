import '../css/Nav.css'
import NavItem from './NavItem';
import { useRef } from 'react'

const Nav = () => {
    const navLinks = [
        'Portfolio',
        'About',
        'Projects',
        'Contact',
    ]

    const navMenuRef = useRef(null)
 
    const openNavList = (event) => {
        navMenuRef.current.classList.toggle('nav__list-show');
        const img = event.target.querySelector(':scope > img').classList.toggle('rotate')
    }

    return (  
        <nav className="nav">
            <div className="nav__content container animated-sections">
                <img className='nav__icon' src={process.env.PUBLIC_URL + '/Assets/Icons/logo.png'} alt="" />
                <ul ref={navMenuRef} className="nav__list nav__list-dark ">
                    {
                        navLinks.map(link => <NavItem key={link} name={link} />)
                    }
                </ul>
                <button className="nav__hamburger-button" onClick={openNavList} type='button'>
                    <img className='nav__icon' src={process.env.PUBLIC_URL + '/Assets/Icons/hamburger.png'} alt="" />
                </button>
            </div>
        </nav>
    );
}
 
export default Nav;
