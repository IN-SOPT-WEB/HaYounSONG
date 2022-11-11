import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Content from './components/Content/Content';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route,Outlet,useParams } from "react-router-dom";
import Search from './pages/Search';
import SearchId from './pages/SearchId';
function App() {
  const [userId,setuserId]=useState('hayounSong')
  
  
  return (
    <>
     
   <BrowserRouter>
   <Outlet/>
    <Routes>
   
    <Route path="/search" element={<Search></Search>}></Route>
    <Route path="/search/:postId" element={<SearchId/>}/>
   {/* 이거를 /search안에다가 넣고 싶었으나.Outlet쓰고도 도저히 작동되지 않아 일단 밖에 빼놨습니다 ㅜㅜ */}
    
   </Routes>

   </BrowserRouter>
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