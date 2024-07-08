import './CoreConcept.css'
import {reactDescription,genrateInt} from"../Header/Header"

export const CoreConcept = ({image,title,description}) =>{
    return <li>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    </li>
}