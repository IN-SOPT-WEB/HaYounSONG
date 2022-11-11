import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
export default function SearchInput({searchHistory,setsearchHistory}){
    const navigate=useNavigate();
    const [onFocus,setonFocus]=useState(false)  

    useEffect(()=>{

        console.log(setsearchHistory)
    })
    


       

    const SearchGithub=(e)=> {
        if (window.event.keyCode === 13) {
            setsearchHistory(searchHistory=>[...searchHistory,e.target.value])
            console.log(searchHistory)
            navigate(`/search/${e.target.value}`)
        }
    }
    
    const HistoryDelete=(name)=>{
        console.log(name)
        setsearchHistory(searchHistory.filter((content)=>content!=name))
        navigate('/search')
    }

    return (
     
        <>        <Styled.searchInput  onBlur={()=>{setonFocus(false)}} onFocus={()=>{setonFocus(true)}} onKeyUp={(e)=>SearchGithub(e)} placeholder='Github Username...'></Styled.searchInput>
        <Styled.FocusContentList>
        {onFocus?
    searchHistory.map((num)=>(<Styled.FoucsContent onBlur={()=>{setonFocus(false)}}onMouseDown={()=>{navigate(`/search/${num}`)}}>{num}<Styled.FocusContentDelete onMouseDown={()=>HistoryDelete(num)}>X</Styled.FocusContentDelete></Styled.FoucsContent>)):(<></>)    
    }
        </Styled.FocusContentList>
        </>
)
  }

  const Styled={

    searchInput: styled.input`
    width:30rem;
    height:2.7rem;
    font-size:20px; 
    color:#0679FF;
    border:3px solid #0679FF;
    padding-left: 1rem;;
    `,
    FoucsContent:styled.div`
        width:30rem;
        height:2rem;
        background-color: gray;
        color:black;
        padding-top:0.5rem;
        font-size:15px;
       
    `,
    FocusContentList:styled.div`
        width:30rem;
        height:auto;
        position: fixed;
        top:10rem;
    `,
    FocusContentDelete:styled.div`
      position :relative  ;
      font-size:1rem;
      left:14rem;
      bottom:1rem;
      color:white;
    `
  }