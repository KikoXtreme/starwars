import { useEffect, useState } from "react";
import { Person } from "./components/Person";
import { ITableState } from "./types";
import '../../styles/loader.css';
import '../../styles/table.css';

const initialTableState: ITableState = {
    people: [],
    totalPages: 0,
    loading: false,
    error: undefined,
}

export const StarWarsTable = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [tableState, setTableState] = useState<ITableState>(initialTableState);

    const { people, totalPages, loading, error } = tableState;

    const fetchPeople = async (pageNumber: number) => {
        try {
            setTableState((prevState) => ({
                ...prevState,
                loading: true,
                error: undefined,
            }));

            const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`);
            const data = await response.json();

            setTableState((prevState) => ({
                ...prevState,
                people: data.results,
                totalPages: Math.ceil(data.count / 10),
                loading: false,
            }));
        } catch (error) {
            console.log('error: ', error)
            setTableState((prevState) => ({
                ...prevState,
                loading: false,
                error: (error as Error)?.message ?? 'Error fetching people',
            }));
        }
    }

    useEffect(() => {
        fetchPeople(pageNumber);
    }, [pageNumber])

    const handleOnNextPageClick = () => {
        setPageNumber(pageNumber >= totalPages ? totalPages : pageNumber + 1);
    }

    const handleOnPreviousPageClick = () => {
        setPageNumber(pageNumber <= 1 ? 1 : pageNumber - 1);
    };

    if (error) {
        return (
            <div className="error">
                <p>{error}</p>
                <button onClick={() => fetchPeople(pageNumber)}>Reload</button>
            </div>
        );
    }

    return (
        <div className="table">
            <h1>Star Wars People Table</h1>
            <img src="/assets/starwarshd.png" alt="Star Wars" />
            <div className="buttons">
                <button disabled={pageNumber <= 1} onClick={handleOnPreviousPageClick}><i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Previous Page</button>
                <button disabled={pageNumber >= totalPages} onClick={handleOnNextPageClick}>Next Page&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="people">
                {loading ? (
                    <div className="loader">
                        <div className="spinner"></div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    people.map((person) => (
                        <Person key={person.name} person={person} />
                    ))
                )}
            </div>
        </div>
    )
}