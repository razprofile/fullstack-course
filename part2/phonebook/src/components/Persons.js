import ReactDOM from 'react-dom'


const Person = ({ name, phone }) => {
    return(
      <div>
        {name} {phone}
      </div>
    )
  }

const Persons = ({ personsToShow }) => {
    return(
      <div>
        {personsToShow.map(person => <Person key={person.name} name={person.name} phone={person.number} /> )}
      </div>
    )
  }

export default Persons