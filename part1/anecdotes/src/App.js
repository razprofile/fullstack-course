import React, { useState } from 'react'


const Button = ({ handleClick, text }) => {
  return(
    <button onClick={handleClick} >{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  const copy = [ ...points ]
  const handleClick = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const addVote = () => {
    copy[selected] += 1;
    setPoints(copy);
  }
  return (
    <div>
      <h2>Anectode of the day</h2>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br />
      <Button handleClick={handleClick} text="next anectode" />
      <Button handleClick={addVote} text="vote" />
      <h2>Anectode with the most votes</h2>
      {anecdotes[points.indexOf(Math.max(...copy))]}
      <br />
      has {Math.max(...copy)} votes
    </div>
  )
}

export default App