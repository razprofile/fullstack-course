import ReactDOM from 'react-dom'

const PersonForm = ({ newName, newNumber, handleNamechange, handleNumberChange, addPerson }) => {
    return(
      <div>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNamechange} />
            <br />
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }

export default PersonForm