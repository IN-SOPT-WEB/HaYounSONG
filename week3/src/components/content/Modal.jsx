

export default function Modal({setonModal,checkcorrect}){
    
    
    if(checkcorrect===false){
        
    return(
        <div onClick={()=>setonModal(false)} className="Modal__background">
        <section className="modal" onClick="">
            <span>땡! 틀렸습니다!</span>
            <button onClick={()=>setonModal(false)}>다시 풀기</button>
        </section>
        </div>
    )
}
else{
   
    return(

        
        <div onClick={()=>setonModal(false)} className="Modal__background">
        <section className="modal correct" onClick="">
            <span>정답입니다!</span>
            <button onClick={()=>setonModal(false)}>마저 풀기</button>
        </section>
        </div>
    )
}
}