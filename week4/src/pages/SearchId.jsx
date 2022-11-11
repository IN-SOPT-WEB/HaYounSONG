
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../components/Content/Content';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header/Header';

export default function SearchId() {

  const [userData,setuserData]=useState({})
  const {postId}=useParams();
  console.log(postId);
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
      <Content userData={userData}></Content>
      {/* {userData[0]?.name} */}

      </Styled.Container>
      </>
   
  );
}


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