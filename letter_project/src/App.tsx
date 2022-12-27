import React from 'react';
import './App.css';
import Header from './components/MainPage/Header';
import { Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import GlobalStyles from './style/GlobalStyle';
function App() {


  
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/write" element={<WritePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;