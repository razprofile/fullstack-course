import React, { useState } from 'react'

// const Statistic = ({ text, value }) => {
//   return(
//     <p>{text} {value}</p>
//   )
// }

const Statistics = ({ good, neutral, bad }) => {
  if(good + neutral + bad === 0) return <p>No feedback given</p>
  const positive = good/(good + bad + neutral) * 100;
  return(
    <table>
      {/* <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="average" value={(good - bad)/(good + bad + neutral)} />
      <Statistic text="positive" value={posAsString} /> */}
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>all</td>
        <td>{good + neutral + bad}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{(good - bad)/(good + bad + neutral)}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{positive.toString().concat(' %')}</td>
      </tr>
    </table>
  ) 
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleGood}>good</button>
      <button onClick={props.handleNeutral}>neutral</button>
      <button onClick={props.handleBad}>bad</button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood  = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleGood={increaseGood} handleNeutral={increaseNeutral} handleBad={increaseBad}/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
