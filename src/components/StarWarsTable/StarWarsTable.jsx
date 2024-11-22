import { useEffect, useState } from "react";
import Person from "../Person/Person";
import '../../styles/loader.css';
import '../../styles/table.css';


const StarWarsTable = () => {
    const [people, setPeople] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(Number);

    console.log('totalPages', totalPages);
    console.log('people ->', people);

    const nextPage = () => {
        setPageNumber((currentPage) => {
            if (currentPage >= totalPages) {
                return totalPages;
            }
            return currentPage + 1;
        });
    }

    const previousPage = () => {
        setPageNumber((currentPage) => {
            if (currentPage <= 1) {
                return 1;
            }
            return currentPage - 1;
        });
    };

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`);
                const data = await response.json();
                setPeople(data.results);
                setTotalPages(Math.floor(data.count / 10) + 1);

                console.log('data ->', data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPeople();
    }, [pageNumber])

    return (
        <div className="table">
            <h1>Star Wars People Table</h1>
            <div className="buttons">
                <button disabled={pageNumber <= 1} onClick={previousPage}>Previous Page</button>
                <button disabled={pageNumber >= totalPages} onClick={nextPage}>Next Page</button>
            </div>
            <div className="people">
                {people.length > 0 ? (
                    people.map((person, index) => (
                        <Person key={index} person={person} />
                    ))
                ) : (
                    <div className="loader">
                        <div className="spinner"></div>
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StarWarsTable;