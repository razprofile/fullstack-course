import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchValue, setSearchValue ] = useState('')
  const [showAll, setShowAll] = useState(true)
  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName
    }
    if(persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNamechange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
    console.log(searchValue)
    if(event.target.value === ''){
      setShowAll(true)
    }else{
      setShowAll(false)
    }
  }
  return (
    <div>
      <Filter searchValue={searchValue} handleSearchValueChange={handleSearchValueChange} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNamechange={handleNamechange} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App