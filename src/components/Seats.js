import axios from "axios";
import { useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import styled from "styled-components";

import SeatsContainer from "./SeatsContainer";

export default function Seates(props) {

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

        <SeatsContainer seats={seats.seats} dataSucess={props.dataSucess} setDataSucess={props.setDataSucess}/>
        <Footer>
            <div>
                <img src={seats.movie.posterURL} alt={seats.movie.title}/>
            </div>
            <span>
                <p>{seats.movie.title}</p>
                <p>{`${seats.day.weekday} - ${seats.day.date}`}</p>
            </span>
        </Footer>
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

const Footer = styled.div`
    height: 117px;
    width: 100%;
    padding: 10px;

    display: flex;
    align-items: center;

    color: #293845;
    font-size: 20px;

    div{
        margin-right: 15px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            height: 89px;
            width: 64px;

            border: solid 10px #ffffff;

        }
    }

    p{
        flex-wrap: wrap;
    }
`;