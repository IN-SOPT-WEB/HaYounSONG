


function listView(){

    const daySelect=document.querySelector(".day-select");
    const dayUl=document.querySelector(".day-select__ul")
    const dayLi=document.querySelectorAll(".day-select__ul li")
    let dayview=0;
    const onView=(dayview)=>{
        
        dayUl.classList.remove('hidden');
        dayview=1;
    }
    const select=(i)=>{

        const alreadyDaySelected=document.querySelector(".day-selected");
        alreadyDaySelected.classList.remove("day-selected")
        dayLi[i].classList.add('day-selected')
        
        const daySelectspan=document.querySelector(".day-select span");

        daySelectspan.innerHTML=dayLi[i].innerHTML;

        dayUl.classList.add('hidden');
       
    }
    document.querySelector("html").addEventListener('click',(e)=>{
        if(!(e.target.classList.contains('day-select__ul'))&&!(e.target.classList.contains('day-select'))&&!(e.target.classList.contains('in-day-select'))){
    //  3중 and 문, ul, 그리고 select 버튼, 그리고 select 버튼 내부 요소를 제외한 나머지 것들에 대해서 ul 창 끄는 기능 적용
            
            dayUl.classList.add('hidden'); 
           
        }
    })
    
    
    daySelect.addEventListener('click',()=>onView(dayview));

    for(let i=0;i<dayLi.length;i++){
        dayLi[i].addEventListener('click',()=>select(i));
    }
   

}


function main(){

    listView();
}

main();