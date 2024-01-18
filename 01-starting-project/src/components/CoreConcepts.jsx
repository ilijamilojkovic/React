import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
const CoreConcepts = () => {
    return(
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem}/>)} {/*Dinamicko generisanje liste uz map() funkciju  */}

            {/*<CoreConcept                      Prosledjivanje parametara(props)
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />

            <CoreConcept {...CORE_CONCEPTS[1]} /> Kraci nacin prosledjivanja parametara(props)
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />} */}
          </ul>
        </section>
    );
}

export default CoreConcepts;