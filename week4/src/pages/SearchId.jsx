
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../components/Content/Content';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header/Header';
import axios from "axios"
export default function SearchId({searchHistory,setsearchHistory}) {
  
  const [userData,setuserData]=useState({})
  const {postId}=useParams();
  async function gitHubprofile(){
    const response = await axios.get(`https://api.github.com/users/${postId}`)
    setuserData(response.data)
  }
  useEffect(()=>{

    gitHubprofile()
  
  },[postId])
  
  return (
    <>
      <GlobalStyles/>
      <Styled.Container>
      <Header searchHistory={searchHistory} setsearchHistory={setsearchHistory}></Header>
      <Content userData={userData}></Content>

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