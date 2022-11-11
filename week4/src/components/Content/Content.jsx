import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
export default function Content({userData}){
    
    const navigate=useNavigate()
    const CloseUserinfo=()=>{

        navigate("/search")
    }

    return (
     
    <Styled.Content>
    <Styled.CloseButton onClick={()=>CloseUserinfo()} >X</Styled.CloseButton>
    {/* {userData[0]?.name} */}
    <Styled.UserImage src={userData.avatar_url}></Styled.UserImage>
    <Styled.UserName>{userData.name}</Styled.UserName>
    
    <Styled.UserFollow>
        팔로워:{userData.followers}  
    </Styled.UserFollow>
    <Styled.UserFollow>

        팔로잉:{userData.following}

    </Styled.UserFollow>
    <Styled.Userlink>깃허브 바로가기</Styled.Userlink>
    </Styled.Content>
      
    )
  }

const Styled={

    Content:styled.div`
        
        width:50rem;
        height:32rem;
        border:3px solid #0679FF;
        border-radius: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    `,
    UserName:styled.div`
      font-size:30px;
      color:#0679FF;
      margin-top:1rem;

    `,
    UserImage:styled.img`
    
    width:15rem;
    height:15rem;
    
    `,
    
    UserFollow:styled.div`
    width:5rem;
    font-size:15px;
    `   ,
    Userlink:styled.button`
    width:7rem;
    height:3rem;
    background-color: #0679FF;
    color:white;
    border-radius: 5px;
    font-size: 15px;


`,

    CloseButton:styled.button`
        width:1rem;
        height:1rem;
        color: gray;
        font-size:25px;
        position: relative;
        left:22rem;
        
    `


}