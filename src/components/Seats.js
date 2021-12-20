import axios from "axios";
import { useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import styled from "styled-components";

import SeatsContainer from "./SeatsContainer";

export default function Seates() {

    const { idSessao } = useParams();
    const [ seats, setSeats ] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promisse.then(response => setSeats(response.data));
    }
    ,[]);

    if(seats.length === 0){
        return("Carregando...");
    }

    return(
        <>
        <Title>Selecione o(s) assento(s)</Title>
        <SeatsContainer seats={seats.seats}/>
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