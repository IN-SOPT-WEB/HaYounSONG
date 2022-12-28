import React,{ReactElement} from "react";
import styled from "styled-components";
import Header from "../components/MainPage/Header";
import Letters from "../components/MainPage/Letters";
function MainPage():ReactElement{

    return(
        <>
        <Header></Header>
        <Letters/>
        </>
    )

}



export default MainPage;