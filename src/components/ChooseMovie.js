import axios from "axios";
import { React, useEffect, useState } from "react"; 
import styled from "styled-components";

import Poster from "./Poster";

export default function ChooseMovie() {

    const [posterURL, setPosterURL] = useState([]);

    useEffect(() =>{
        const promisse = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promisse.then(response => {
            setPosterURL(response.data);
        })
    },[]);

    if(posterURL.length === 0){
        return("Carregando...");
    }

    return(
        <>
        <Title>Selecione o filme</Title>
        <Movies>
            {posterURL.map(poster => 
            <li>
                <Poster {...poster}/>
            </li>)}
        </Movies>
        </>
    );
}

const Title = styled.h1`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #293845;

    margin: 40px 0 30px 0;
    width: 100%;
`;

const Movies = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li{
        width: 145px;
        height: 209px;
        margin: 5px;

        border: solid 8px #FFFFFF;
        border-radius: 3px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }

    li img{
        width: 129px;
        height: 193px;
    }
`;