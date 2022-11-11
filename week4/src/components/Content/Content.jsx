import React from 'react'
import styled from 'styled-components'

export default function Content({userData}){
    
    return (
     
    <Styled.Content>
    {/* {userData[0]?.name} */}
    <Styled.UserImage src={userData[0]?.avatar_url}></Styled.UserImage>
    <Styled.UserName>{userData[0]?.name}</Styled.UserName>
    
    <Styled.UserFollow>
        팔로워:{userData[0]?.followers}  
    </Styled.UserFollow>
    <Styled.UserFollow>

        팔로잉:{userData[0]?.following}

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
      margin-bottom:1rem;
    `,
    UserImage:styled.img`
    
    width:15rem;
    height:15rem;
    margin-top: 1rem;
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


}