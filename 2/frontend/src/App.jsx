import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [jokes, setJokes] = useState([])
  
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  

  return (
    <div>
      <p>
        Jokes: {jokes.length}
      </p>
      {
        jokes.map((jokes, index)=>(
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App