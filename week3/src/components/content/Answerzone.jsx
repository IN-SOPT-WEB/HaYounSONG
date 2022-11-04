import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Answerzone({current_score,set_score}){
    const [answer,setanswer]=useState([])
    const quiz_answer=[1,0,1,2,3]
    useEffect(()=>{
        
        switch(current_score) {
            case 0:  // if (x === 'value1')
              setanswer(['뽀로로','루피','크롱','피카츄'])
              break
          
              case 1:  // if (x === 'value1')
              setanswer(['크롱','리자몽','송하윤','아이유'])
              break
          
              case 2:  // if (x === 'value1')
              setanswer(['포비','푸','포','곰돌이'])
              break
              case 3:  // if (x === 'value1')
              setanswer(['쥐','뽀로로','피카츄','크롱'])
              break
              case 4:  // if (x === 'value1')
              setanswer(['강아지','펭귄','곰돌이푸','뽀로로'])
              break
              default:
                
                break
          }
        },[current_score])

        const button_clicked=(e)=>{
            if(e.target.value==quiz_answer[current_score]){
                set_score(current_score+1)
                current_score++;
            }
        }
    return(

        <div className="answer_zone">
            <button className="answer_button"onClick={(e)=>button_clicked(e)} value={0}>{answer[0]}</button>
            <button className="answer_button"onClick={(e)=>button_clicked(e)} value={1}>{answer[1]}</button>
            <button className="answer_button"onClick={(e)=>button_clicked(e)}value={2}>{answer[2]}</button>
            <button className="answer_button"onClick={(e)=>button_clicked(e)}value={3}>{answer[3]}</button>
        </div>
    )
}