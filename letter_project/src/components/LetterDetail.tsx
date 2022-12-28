
import styled from "styled-components"
interface LetterType {
    body:string,
    email: string,
    id:number,
    name:string,
    postId:number
  }

  // 이거를 공통으로 사용하면 좋을 것 같습니다..! 
type LetterProps = {
    props : LetterType 
  }
export default function LetterDetail(props:LetterProps){


    return(
        <>
        {props.props===undefined?<>로딩중입니다</>:
        
        <Styled.LetterDetail>{props.props.id}</Styled.LetterDetail>}


        </>
    
    )
}


const Styled={
    LetterDetail:styled.main`
    `
}