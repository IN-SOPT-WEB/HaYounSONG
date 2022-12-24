
import React,{FC, ReactElement} from "react";
import styled from "styled-components";
function Header():ReactElement{

    return(
        <Styled.Header>
            <Styled.HeaderText>웹 파트 비밀 편지함</Styled.HeaderText>
            <Styled.WriteButton>글 쓰러 가기!</Styled.WriteButton>
        </Styled.Header>
    )
}
const Styled={
    Header:styled.header`
    width:100%;
    height:80px;
    background: #006EFF;
    display: flex;
    justify-content:center;
    align-items: center;
    `,
    HeaderText:styled.div`
    width:100%;
    color:white;
    font-size:40px;
    font-weight:bolder;
    margin-left:100px;
    `,
    WriteButton:styled.button`

    background-color:white;
    color:#006EFF;
    border-radius:10px;
    width:130px;
    height: 30px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bolder;
    margin-right:50px;`

    
}
export default Header;