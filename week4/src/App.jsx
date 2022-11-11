import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header/Header';

function App() {
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
      <Header></Header>
      {/* {userData[0]?.name} */}

      </Styled.Container>
      </>
   
  );
}

export default App;

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