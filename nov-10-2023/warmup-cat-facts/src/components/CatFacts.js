'use client'
import { useEffect, useState } from 'react';
/*
## Specifications
Show some random CAT facts!

Create a React component
- Grab data from REST API url `https://catfact.ninja/facts?limit=30`
- Display each fact in an unordered list
- Have a button to grab more facts, which will grab more data and show the new facts

## Extra Challenge
Have the user select the number of facts to be displayed
*/

export default function CatFacts() {

    const [numberOfFacts, setNumberOfFacts] = useState(5);
    const [catFacts, setCatFacts] = useState([])

    const fetchCatFacts = async () => {
        const url = `https://catfact.ninja/facts?limit=${numberOfFacts}`
        const response = await fetch(url);
        const json = await response.json();
        const facts = json.data.map(({ fact }) => fact)

        return facts;
    }

    const loadCatFacts = async () => {
        const facts = await fetchCatFacts();
        setCatFacts(facts)
    }

    const handleOnInput = (event) => {
        const inputNumber = Number(event.target.value);
        const numberToUse = Math.max(1, Math.min(30, inputNumber));

        setNumberOfFacts(numberToUse)
    }

    useEffect(() => {
        loadCatFacts()
    }, [numberOfFacts])

    return (
        <div>
            <input type="number" value={numberOfFacts} onInput={handleOnInput}/>
            <ul>
                {
                    catFacts.map(catFactItem => (
                        <li>{catFactItem}</li>
                    ))
                }
            </ul>
        </div>
    )
}