
import './css/App.css';
import Content from './components/Content';
import Header from './components/header/Header';
import { useState } from 'react';

function App() {
  
  const [current_score,set_current_score]=useState(0)
  return (
    <div className="App">
      <main className='Mobile'>

      <Header></Header>
      <Content current_score={current_score} set_score={set_current_score}></Content>
      </main>
    </div>
  );
}

export default App;
