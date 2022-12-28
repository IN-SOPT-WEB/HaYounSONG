import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import LetterDetail from "../components/LetterDetail";

export default function DetailPage(){
    interface LetterType {
        body:string,
        email: string,
        id:number,
        name:string,
        postId:number
      }
    const [letterList,setletterList]=useState<LetterType[]>([]);
    const letterId=useParams();
    const getLetter=async():Promise<void>=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/comments");
        setletterList(response.data);
    }
    useEffect(()=>{
        getLetter();
},[])

    return(
        <>
        {letterId.letterId===undefined ? <>로딩중입니다</>: <LetterDetail props={letterList[Number(letterId.letterId)-1]}></LetterDetail>
        
    }
    </>
       
    )
    
}

