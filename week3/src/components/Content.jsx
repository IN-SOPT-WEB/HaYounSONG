import React from 'react'
import Answer_zone from './content/Answer_zone'
import Quiz from './content/Quiz'
import Restart from './content/Restart'
import Score from './content/Score'

export default function Content({current_score}) {
  return (
    <section className='component'>
      <Score current_score={current_score}></Score>
      <Quiz></Quiz>
      <Answer_zone></Answer_zone>
      <Restart></Restart>
      
    </section>
  )
}
