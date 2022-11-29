import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'
export default function Header({searchHistory,setsearchHistory}){
    console.log(setsearchHistory)
    return (
     
      <Styled.HeaderZone>
      <Styled.HeaderText>Find friends GitHub!</Styled.HeaderText>
      <SearchInput searchHistory={searchHistory} setsearchHistory={setsearchHistory}></SearchInput>
      </Styled.HeaderZone>
     
      
    )
  }

const Styled={
    HeaderText : styled.div`
      background-color: white;
      width:100%;
      font-size: 3rem;
      text-align:center;
      color:#0679FF;
    `,
    HeaderZone:styled.header`
        width:30rem;
        height:10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top:1rem;
        
    `}