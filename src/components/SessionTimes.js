import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function SessionTimes() {

    const [Sessions, setSessions] = useState(null);
    const { idFilme } = useParams();
    console.log(idFilme);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promisse.then(response => setSessions(response.data));
    }
    ,[]);

    return(
        <Title>Selecione o horário</Title>
    );
}

const Title = styled.h1`
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;

    margin: 40px 0 30px 0;
    width: 100%;
`;