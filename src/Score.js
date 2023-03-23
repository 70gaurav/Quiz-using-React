import React, { useContext } from 'react'
import { scoreContext } from './App'

function Score() {
  const {score} = useContext(scoreContext)
  const {wronganswer, setwronganswer} = useContext(scoreContext)
  return (
    <div className='score'>
      <h1>Quiz completed</h1>
      <h1>Your score: {score} / 10</h1>
      <h1>You have chosen wrong options of these questions</h1>
      

      <div className='wrongquestions'>
      {
        wronganswer.map((element,index)=>{
          return(
            
            <div className='wrong' key={index}>
              <h1>{element.question}</h1>
             <h4>a:{element.a}</h4>
             <h4>b:{element.b}</h4>
             <h4>c:{element.c}</h4>
             <h4>d:{element.d}</h4>
             <h2>Correct answer:{element.answer}</h2>
            </div>
           )
         
        })
        
      }
      </div>

    </div>
  )
}

export default Score