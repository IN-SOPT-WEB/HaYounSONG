import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import ReactElement from 'react';
export default function Letters(){
    interface LetterType {
        body:string,
        email: string,
        id:number,
        name:string,
        postId:number
    
      }
    const [letterList,setletterList]=useState<LetterType[]>([]);
    const getLetter=async():Promise<void>=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/comments");
        setletterList(response.data);
    }
    const letterClicked=()=>{
        
    }

    useEffect(()=>{
        getLetter();
    },[])
return(
    <Styled.Letters>
         {letterList===undefined ? <div>로딩중입니다..</div> : <>
       {letterList.slice(0,3).map((index:any)=>(<Styled.Letter>{index.name}이가 작성...</Styled.Letter>))}</>}

        
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