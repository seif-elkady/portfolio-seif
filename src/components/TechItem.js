

const TechItem = ({ name, icon }) => {
    return (  
        <li className="tech-item d-flex">
            <img src={icon} alt="" />
            <span className="tech-name">{name}</span>
        </li>
    );
}
 
export default TechItem;