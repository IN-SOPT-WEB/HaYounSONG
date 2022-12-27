import React from "react"
import styled from "styled-components"
export default function Letters(){
return(
    <Styled.Letters>
        <Styled.Letter></Styled.Letter>
    </Styled.Letters>
)
}

const Styled={

    Letters:styled.main`
        display: flex;
    `,
    Letter:styled.div`
        
    `,
}