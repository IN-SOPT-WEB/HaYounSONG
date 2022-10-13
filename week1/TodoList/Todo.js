


function useViewState(){
    const today = document.querySelector(".today_button"); 
    const tomorrow = document.querySelector(".tomorrow_button");
    const allday=document.querySelector(".allday_button")
    const leftPanel=document.querySelector(".left-section");
    const rightPanel=document.querySelector(".right-section");


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

    const todayInput=document.querySelector(".left-input");
    const tomorrowInput=document.querySelector(".right-input");
    const todayUl=document.querySelector(".left-section ul")
    const tomorrowUl=document.querySelector(".right-section ul")
    const todayAdd=document.querySelectorAll("button.add-button")[0];
    const tomorrowAdd=document.querySelectorAll("button.add-button")[1];
    
    const onDelete=(li)=>{
       li.remove();
    }
    
    const onAdd=(input,ul)=>{

        const currentValue=input.value;
        if(currentValue.length>0){
        const currentLi=document.createElement("li");
        currentLi.innerHTML=currentValue;
        const currentSimbol=document.createElement("span");
        currentSimbol.className="material-symbols-outlined";
        currentSimbol.innerHTML="delete";
        currentLi.appendChild(currentSimbol)
        currentSimbol.addEventListener('click',()=>onDelete(currentLi));
        ul.appendChild(currentLi);
        input.value="";
    }

    }
    

    todayAdd.addEventListener('click',()=>onAdd(todayInput,todayUl));
    tomorrowAdd.addEventListener('click',()=>onAdd(tomorrowInput,tomorrowUl));
    todayInput.addEventListener('keydown',(e)=>{
        if(e.keyCode===13){
            //Enter키 클릭시.
            
            onAdd(todayInput,todayUl);
            todayInput.value="";
        }
    })

    tomorrowInput.addEventListener('keydown',(e)=>{
        if(e.keyCode===13){
             //Enter키 클릭시.
            onAdd(tomorrowInput,tomorrowUl);
            tomorrowInput.value="";
        }
    })
}

function main(){
    
    useViewState();
    useTodoList();

}




main();
