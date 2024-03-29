import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import LetterType from "../../types/LetterType";
export default function Letters(){

    const navigate=useNavigate();
    const [letterList,setletterList]=useState<LetterType[]>([]);
    const getLetter=async():Promise<void>=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/comments");
        setletterList(response.data);
    }
    const letterClicked=(letter:LetterType):void=>{

        navigate(`/${letter.id}`)
    }
    useEffect(()=>{
        getLetter();
    },[])
return(
    <Styled.Letters>
        {letterList===undefined ? <div>로딩중입니다..</div> : <>
        {letterList.slice(0,3).map((index:LetterType)=>(<Styled.Letter onClick={()=>letterClicked(index)}>{index.name}이가 작성...</Styled.Letter>))}</>}

    </Styled.Letters>
)   
}

const Styled={

    Letters:styled.main`
        display: flex;
        justify-content: space-around;
        padding-top:100px;
    `,
    Letter:styled.div`
        width:300px;
        height:100px;
        background-color: #006EFF;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-weight: bolder;
        border-radius: 30px;
    `,

}