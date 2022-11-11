import React from 'react'
import styled from 'styled-components'
export default function SearchInput(){
 
    return (
     
      
        <Styled.searchInput placeholder='Github Username...'></Styled.searchInput>
      
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