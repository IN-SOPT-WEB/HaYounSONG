import { useEffect, useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import { BrowserRouter, Routes, Route,Outlet,useParams } from "react-router-dom";
import Search from './pages/Search';
import SearchId from './pages/SearchId';
function App() {
 
  const [searchHistory,setsearchHistory]=useState([])
  return (
    <>
     <QRCodeSVG
  value={"http://localhost:3000/home"}
  size={128}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  level={"L"}
  includeMargin={false}
  imageSettings={{
    src: "https://static.zpao.com/favicon.png",
    x: undefined,
    y: undefined,
    height: 24,
    width: 24,
    excavate: true,
  }}
/>
 
   </>
  );
}

export default App;
