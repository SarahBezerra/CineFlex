import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Session from "./Session";

export default function SessionTimes() {

    const [session, setSession] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promisse.then(response => setSession(response.data));
    }
    ,[idFilme]);

    return(
        <>
        <Title>Selecione o horário</Title>

        {session.days.map(infos => 
            <Session {...infos}/>
        )}
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