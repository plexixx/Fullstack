import { useState } from 'react'

const Header = ({header}) => {
  return (
    <>
      <h1>{header}</h1>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const getRandomInt = ({min, max}) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
  
  const handleAnecdoteClick = ({min, max}) => {
    const handler = () => {
      const random = getRandomInt({min:min, max:max})
      console.log('random number:', random)
      setSelected(random)
    }
    return handler
  }

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleVoteClick = (index) => {
    const handler = () => {
      const copy = [...points]
      console.log('copy before:', copy)
      copy[index] += 1
      console.log('copy after:', copy)
      setPoints(copy)
      console.log('points', points)
      console.log('max point index:', points.indexOf(Math.max(...points)))
    }
    return handler
  }

  let anecdotesProps = {min: 0, max: anecdotes.length}

  return (
    <div>
      <Header header={'Anecdote of the day'}/>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <Button handleClick={handleVoteClick(selected)} text={'vote'}/>
      <Button handleClick={handleAnecdoteClick(anecdotesProps)} text={'next anecdote'}/>
    
      <Header header={'Anecdote with most votes'}/>
      {anecdotes[points.indexOf(Math.max(...points))]}
      <br/>
      has {Math.max(...points)} votes
    </div>
  )
}

export default App