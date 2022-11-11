import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
export default function SearchInput(){
    const navigate=useNavigate();
    const SearchGithub=(e)=> {
        if (window.event.keyCode === 13) {
            navigate(`/search/${e.target.value}`)
        }
    }
    return (
     
      
        <Styled.searchInput onKeyUp={(e)=>SearchGithub(e)} placeholder='Github Username...'></Styled.searchInput>
      
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
    `
  }