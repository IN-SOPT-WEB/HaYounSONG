import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route,Outlet,useParams } from "react-router-dom";
import Search from './pages/Search';
import SearchId from './pages/SearchId';
function App() {
 
  const [searchHistory,setsearchHistory]=useState([])
  return (
    <>
     
   <BrowserRouter>
   <Outlet/>
    <Routes>
   
    <Route path="/search" element={<Search searchHistory={searchHistory} setsearchHistory={setsearchHistory}></Search>}></Route>
    <Route path="/search/:postId" element={<SearchId searchHistory={searchHistory} setsearchHistory={setsearchHistory} />}/>
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