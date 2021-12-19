import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import styled from "styled-components";

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

        <Seats>
            {seats.seats.map(seat => 
                <Seat state={seat.isAvailable}>{seat.name}</Seat>
            )}
        </Seats>

        <Subtitle>
            <div><div className="selected"/>Selecionado</div>
            <div><div className="available"/>Disponível</div>
            <div><div className="unavailable"/>Indisponível</div>
        </Subtitle>

        <PersonalData>
            <div className="title">Nome do comprador:</div>
            <input type="text" placeholder="Digite seu nome..."></input>
            <div className="title">CPF do comprador:</div>
            <input type="text" placeholder="Digite seu CPF..."></input>
        </PersonalData>

        <Bnt>
        <Link to={"/sucesso"}>
            <div>Reservar assento(s)</div>
        </Link>
        </Bnt>
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

const Seats = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Seat = styled.div`
        width: 26px;
        height: 26px;
        margin-bottom: 18px;

        background-color: ${(props) =>  props.state ? "#C3CFD9" : "#FBE192" };
        border-radius: 50%;
        border: solid 1px ${(props) =>  props.state ? "#7B8B99" : "#F7C52B" };
        display: flex;
        align-items: center;
        justify-content: center;

        color: #000000;
        font-size: 11px;
        line-height: 12.89px;
`;

const Subtitle = styled.div`
    padding: 0 30px;

    display: flex;
    justify-content: space-between;

    div{
        width: 80px;

        font-size: 13px;
        line-height: 15.23px;
        color: #4E5A65;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    div .selected{
        width: 25px;
        height: 25px;
        background-color: #8DD7CF;
        border: solid 1px #1AAE9E;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    div .available{
        width: 25px;
        height: 25px;
        background-color: #C3CFD9;
        border: solid 1px #7B8B99;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    div .unavailable{
        width: 25px;
        height: 25px;
        background-color: #FBE192;
        border: solid 1px #F7C52B;
        border-radius: 50%;
        margin-bottom: 5px;
    }
`;

const PersonalData = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 45px 0;

    .title{
        font-size: 18px;
        color: #293845;

        margin-bottom: 5px;
    }

    input{
        width: 327px;
        height: 51px;
        border-radius: 3px;
        background-color: #FFFFFF;
        margin-bottom: 10px;
        border: solid 1px #D4D4D4;
        padding: 0 18px;

        ::placeholder{
            font-size: 18px;
            color: #AFAFAF;
            line-height: 21.09px;
            font-style: italic;
        }
    }
`;

const Bnt = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    div{
        width: 225px;
        height: 42px;
        background-color: #E8833A;

        font-size: 18px;
        color: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
    }
`;