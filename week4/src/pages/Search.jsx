import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header/Header';
function Search({searchHistory,setsearchHistory}) {
  const [userData,setuserData]=useState({})
  
  useEffect(()=>{

  fetch("/url")
  .then((response) => response.json())
  .then((data) => {
  setuserData(data)});
},[])
  return (
    <>
      <GlobalStyles/>
      <Styled.Container>
      <Header searchHistory={searchHistory||[]} setsearchHistory={setsearchHistory}></Header>
      </Styled.Container>
      </>
   
  );
}

export default Search;

const Styled={
Container : styled.div`
  background-color: white;
  width:100%;
  height:100vh;
  text-align:center;
  display: flex;
  align-items: center;
  flex-direction: column;
`}