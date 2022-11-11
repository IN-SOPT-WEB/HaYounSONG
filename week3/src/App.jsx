
import './css/App.css';
import Content from './components/Content';
import Header from './components/header/Header';
import { useState } from 'react';
import { createPortal } from "react-dom";
import Modal from './components/content/Modal';
import ModalPortal from './components/ModalPortal';
function App() {
  
  const [onModal,setonModal]=useState(false)
  const [current_score,set_current_score]=useState(0)
  const [checkcurrect,setcheckcorrect]=useState(true)
  return (
    <div className="App">
      <ModalPortal>
          {onModal&& <Modal setonModal={setonModal} checkcorrect={checkcurrect} />}
        </ModalPortal>
      <main className='Mobile'>

      <Header></Header>
      <Content setonModal={setonModal} setcheckcorrect={setcheckcorrect} current_score={current_score} set_score={set_current_score}></Content>
      </main>
    </div>
  );
}

export default App;
