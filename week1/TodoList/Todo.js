


function useViewState({
 
}){
    const today = document.querySelector(".today_button"); 
    const tomorrow = document.querySelector(".tomorrow_button");
    const allday=document.querySelector(".allday_button")
    const leftPanel=document.querySelector(".left-section");
    const rightPanel=document.querySelector(".right-section");
  
    function click(e){
        alert('ss');
    }

const viewToday=()=>{
    rightPanel.classList.add("hidden");
    leftPanel.classList.remove("hidden");
}
const viewTomorrow=()=>{
    leftPanel.classList.add("hidden");
    rightPanel.classList.remove("hidden");
}
const viewAllday=()=>{
    leftPanel.classList.remove("hidden");
    rightPanel.classList.remove("hidden");
}


today.addEventListener("click", viewToday)
tomorrow.addEventListener("click",viewTomorrow)
allday.addEventListener("click",viewAllday)

}


function useTodoList(){
    // const onAdd=()=>{
            
// const currentValue=input.value;
// const currentLi=document.createElement("li");
// currentLi.classList.add("todo__item");
// currentLi.innerHTML=currentValue;


// const currentDeleteButton=document.createElement("button")
// currentDeleteButton.innerHTML=`<span class="material-symbols-outlined">
// delete</span>`
// currentLi.appendChild(currentDeleteButton);
// container.appendChild(currentLi);
//     }
//     submit.addEventListner("click",onAdd);
//     input.addEventListner("keydown",e=>{
//         if(e.keyCode==="Enter"){
//             onAdd;
//         }
//     })
// currentDeleteButton.addEventListner("click",)

}

   
    
// //     )
function main(){
    
    
    useViewState();


}




main();
