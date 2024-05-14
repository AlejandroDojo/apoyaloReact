import React from "react";

const PersonCard = ({name, lastName, age, hairColor}) => {
    return (<div>
        <h2>{name}, {lastName}</h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        </div>);
}
export default PersonCard;