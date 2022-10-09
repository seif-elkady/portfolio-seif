

const NavItem = ({name}) => {
    return (  
        <li className="nav__item">
            <a href={'#' + name.toLowerCase()} className="nav__link">{name}</a>
        </li>
    );
}
 
export default NavItem;