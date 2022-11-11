import React from 'react'
import Answerzone from './content/Answerzone'
import Quiz from './content/Quiz'
import Restart from './content/Restart'
import Score from './content/Score'

export default function Content({current_score,set_score,setonModal,setcheckcorrect}) {
  

  if(current_score===5){
    return(
      <section className='component'>
        <div className='finish_text'>끝!</div>
        <Restart set_score={set_score}></Restart>
        </section>
    )
  }
  return (
    <section className='component'>
      <Score current_score={current_score}></Score>
      <Quiz current_score={current_score}></Quiz>
      <Answerzone setcheckcorrect={setcheckcorrect}setonModal={setonModal} current_score={current_score} set_score={set_score}></Answerzone>
      <Restart set_score={set_score}></Restart>
      
    </section>
  )
}
