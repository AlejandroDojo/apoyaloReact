import { Component } from "react"


class PersonCard extends Component {
    render = () => {
        const {name, lastName, age, hairColor} = this.props;
        return (
            <div>
            <h2>{name}, {lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}
export default PersonCard;