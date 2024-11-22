import { useEffect, useState } from "react";
import '../../styles/spinner.css';
import Person from "../Person/Person";

const StarWarsTable = () => {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState([]);

    console.log('people ->', people);

    useEffect(() => {

        const fetchPeople = async () => {

            try {
                const response = await fetch(`https://swapi.dev/api/people/?page=1`);
                const data = await response.json();
                setPeople(data.results);

                console.log('data ->', data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPeople();
    }, [])

    return (
        <div id="table-wrapper">
            Star Wars People Table
            <div>
                {people.length > 0 ? (
                    people.map((person, index) => (
                        <Person key={index} person={person} />
                    ))
                ) : (
                    <div>
                        <div className="spinner"></div>
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StarWarsTable;