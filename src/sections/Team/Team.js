import React from 'react';
import './Team.css';
import buddies from '../../images/BestBuddies.jpg';

function Team() {
    const people = [
        {name: "Matthew O'Boyle", img: buddies},
        {name: "Feroze Mohideen", img: buddies},
    ];
    return (
        <div id="team">
            {people.map(person => {
                return <div>
                    <img src={person.img} />
                    <p>{person.name}</p>
                </div>
            })}
        </div>
    );
}

export default Team;
