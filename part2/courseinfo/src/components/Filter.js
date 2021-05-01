import ReactDOM from 'react-dom'

const Filter = ({ searchValue, handleSearchValueChange }) => {
    return(
      <div>
        <h2>Phonebook</h2>
        filter shown with <input value={searchValue} onChange={handleSearchValueChange} />
      </div>
    )
}

export default Filter