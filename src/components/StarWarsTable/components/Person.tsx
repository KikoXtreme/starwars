import '../../../styles/person.css';
import { IPerson } from '../types';

export const Person: React.FC<{ person: IPerson }> = ({ person }) => {
    const { name, mass, height, hair_color, skin_color } = person;

    return (
        <div className="person">
            <h2>{name}</h2>
            <div className='mass'>
                <div>Mass:</div>
                <div>{mass} kg</div>
            </div>
            <div className='height'>
                <div>Height:</div>
                <div>{height} cm</div>
            </div>
            <div className='hair'>
                <div>Hair color:</div>
                <div>{hair_color}</div>
            </div>
            <div className='skin'>
                <div>Skin Color:</div>
                <div>{skin_color}</div>
            </div>
        </div>
    )
}