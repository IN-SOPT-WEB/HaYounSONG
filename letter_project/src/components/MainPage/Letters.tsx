import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import ReactElement from 'react';
export default function Letters(){
    // interface LetterType {
    //     [
    //     writer: string,
    //     content:string,
    // ]
    //   }
    const [letterList,setletterList]=useState<any>([]);
    const getLetter=async():Promise<void>=>{
        const response:any=await axios.get("https://jsonplaceholder.typicode.com/comments");
        setletterList(response.data);

    }
    useEffect(()=>{
        getLetter();
        console.log(letterList)
    },[])
return(
    <Styled.Letters>
         {letterList===undefined ? <div>로딩중입니다..</div> : <>
       {letterList.slice(0,3).map((index:any)=>(<div>{index.name}</div>))}</>}

        
    </Styled.Letters>
)   
}

const Styled={

    Letters:styled.main`
        display: flex;
    `,
    Letter:styled.div`
        
    `,
}