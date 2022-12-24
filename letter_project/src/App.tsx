import React from 'react';
import './App.css';
import Header from './components/MainPage/Header';
import { Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
function App() {

  let number:string='asdf';
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/write" element={<WritePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;