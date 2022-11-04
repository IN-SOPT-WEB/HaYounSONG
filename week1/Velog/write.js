

let taglist=[];

if(localStorage.getItem('tag')){
taglist=JSON.parse(localStorage.getItem('tag'));
}

function Tag(){

    for(let i=0;i<taglist.length;i++){
        const currentUl=document.querySelector(".tag-list");
        const currentValue=taglist[i];
        const currentTag=document.createElement("li");
            currentTag.innerHTML=currentValue;
            currentUl.appendChild(currentTag);
    }
    
    const addTag=(input)=>{
        const currentUl=document.querySelector(".tag-list");
        const currentValue=input.value;
        let alreadyTag=false;
        for(let i=0;i<taglist.length;i++){

            if(taglist[i]===currentValue){
                alreadyTag=true;

            }
        }
        if(alreadyTag===false){
            taglist.push(currentValue);
            const currentTag=document.createElement("li");
            currentTag.innerHTML=currentValue;
            currentUl.appendChild(currentTag);
            input.value="";
            localStorage.setItem('tag', JSON.stringify(taglist));
        }
        else{
            alert("이미 있는 태그입니다!")
        }

        
    }
    const tagInput=document.querySelector(".tag-input");

    tagInput.addEventListener('keydown',(e)=>{
        if(e.keyCode===13){
        addTag(tagInput)
    }
})
}

function main(){

    Tag();
    
}



main();

