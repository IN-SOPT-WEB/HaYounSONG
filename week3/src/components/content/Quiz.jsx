import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Quiz({current_score}){
    const [img,setimg]=useState("")
    


    useEffect(()=>{
    
    switch(current_score) {
        case 0:  // if (x === 'value1')
          setimg("images/Quiz1.jpeg")
          break
      
          case 1:  // if (x === 'value1')
          setimg("images/Quiz2.jpeg")
          break
      
          case 2:  // if (x === 'value1')
          setimg("images/Quiz3.jpeg")
          break
          case 3:  // if (x === 'value1')
          setimg("images/Quiz4.png")
          break
          case 4:  // if (x === 'value1')
          setimg("images/Quiz5.jpeg")
          break
          default:
            setimg("images/Quiz5.jpeg")
            break
      }
    },[current_score])

    return(
        <div className="Quiz-zone">
        


        <img className="Quiz-image" src={img} alt="../images/Quiz5.jpeg"/>
        {current_score}
        </div>
    )
}