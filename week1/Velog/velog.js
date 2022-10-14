


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

function modal(){
    const articles=document.querySelectorAll("section article");
    const body=document.querySelector('body');
    
    
    function viewModal(article,body){
        
        const modal__area=document.createElement('div')
        modal__area.className='modal__area';
        body.appendChild(modal__area);
        body.style.overflow='hidden';  
        
        const article__clone=article.cloneNode(true);
        modal__area.appendChild(article__clone);

        function closeModal(modal__area,body){
            modal__area.remove();
            body.style.overflow='scroll';
        }
        const close_button=document.createElement('button');
        close_button.className='close-button'
        close_button.innerHTML="X";
        
        close_button.addEventListener('click',()=>closeModal(modal__area,body))
        modal__area.appendChild(close_button)

    }

    for(let i=0;i<articles.length;i++){
        articles[i].addEventListener('click',()=>viewModal(articles[i],body))
    }

}

function main(){

    listView();
    modal();
}

main();