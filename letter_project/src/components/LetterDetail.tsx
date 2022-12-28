import Header from "./MainPage/Header"
import styled from "styled-components"
import { NavigateFunction, useNavigate } from 'react-router-dom';
import LetterType from "../types/LetterType";

  // 이거를 공통으로 사용하면 좋을 것 같습니다..! 
type LetterProps = {
    props : LetterType 
  }
export default function LetterDetail(props:LetterProps){
    const navigate:NavigateFunction=useNavigate();
    const letterData:LetterType=props.props;
    
    const BackClicked=():void=>{
        navigate(-1);
    }
    return(
        <>
        <Header></Header>
        {letterData===undefined?<>로딩중입니다</>:
        
        <Styled.LetterPage>
        <Styled.LetterDetail>
            <Styled.LetterContent>
            {letterData.body}
            </Styled.LetterContent>
            <Styled.LetterWriter>
                {letterData.name} 작성
            </Styled.LetterWriter>
            <Styled.BackButton onClick={()=>BackClicked()}>돌아가기</Styled.BackButton>
            </Styled.LetterDetail>
            
            </Styled.LetterPage>
        }
        

        </>
    
    )
}


const Styled={
    LetterPage:styled.main`
    width:100%;
    margin-top:70px;
    display:flex;
    justify-content:center;
    align-items:center;`
    
    ,
    LetterDetail:styled.div`
    width:700px;
    height:400px;
    background-color: white;
    color:#006EFF;
    border:5px solid #006EFF;
    `,
    LetterWriter:styled.div`
    
    margin-top:200px;
    font-weight: bold;
    font-size:30px;
    `,
    LetterContent:styled.div`
    margin-top:50px;
    `,
    BackButton:styled.button`
    margin-top:10px;
    background-color: #006EFF;
    color:white;
    padding:10px 15px;
    font-weight: bold;
    `
}