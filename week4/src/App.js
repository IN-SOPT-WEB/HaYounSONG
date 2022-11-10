import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userData,setuserData]=useState({})
  useEffect(()=>{
  fetch("/url")
  .then((response) => response.json())
  .then((data) => {
  setuserData(data)});
},[])
  return (
    <div className="App">
      {userData[0]?.name}
    </div>
  );
}

export default App;
