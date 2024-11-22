import '../../styles/person.css';

const Person = ({ person }: any) => {

    console.log('person', person);

    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.mass} kg</h2>
            <h2>{person.height} sm</h2>
            <h3>{person.hair_color}</h3>
            <div>{person.skin_color}</div>
        </div>
    )
}

export default Person;