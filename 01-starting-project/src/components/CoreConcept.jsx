import './CoreConcepts.css';
function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}
/*                                                      
function CoreConcept({title, image, description}){   ----Kraca verzija gornje funkcije, umesto props pisemo sve parametre ----
  return(                                              ----u viticastim,a na mestu npr. {props.image} pisemo samo {image}----
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
*/

export default CoreConcept;