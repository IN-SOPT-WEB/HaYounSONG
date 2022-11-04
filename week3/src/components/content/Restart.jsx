import React from "react"
export default function Restart({set_score}){

    const restart=()=>{
        set_score(0)
        
    }
    return(

        <footer className="Restart">
        
        <button className="Restart-button" onClick={()=>restart()}>
            다시 시작하기!
        </button>
        
        </footer>
    )


}