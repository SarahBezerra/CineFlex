import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sucess(props) {

    const ids = [];
    props.dataSucess.seats.map(info =>
        ids.push(info.id)
    );

    const promisse = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", 
    {ids: ids, name: props.dataSucess.name, cpf: props.dataSucess.cpf});
        promisse.then(response => {
            console.log("dados enviados com sucesso");
    })

    return(
        <>
        <Title>
            Pedido feito{"\n"}com sucesso!
        </Title>

        <MovieInfo>
            <h2>Filme e sessão</h2>
            <p>{props.dataSucess.movieInfos.movie.title}</p>
            <p>{`${props.dataSucess.movieInfos.day.date} - ${props.dataSucess.movieInfos.name}`}</p>

            <h2>Ingressos</h2>
            {props.dataSucess.seats.map(info =>
                <p>{`Assento: ${info.name}`}</p>
            )}

            <h2>Comprador</h2>
            <p>{`Nome: ${props.dataSucess.name}`}</p>
            <p>{`CPF: ${props.dataSucess.cpf}`}</p>
        </MovieInfo>

        <Btn>
            <Link to={"/"}>
                <div>Voltar pra Home</div>
            </Link>
        </Btn>

        </>
    );
}

const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    color: #247A6B;
    line-height: 28px;
    letter-spacing: 0.04em;

    margin-top: 30px;
`;

const MovieInfo = styled.div`
    h2{
        font-size: 24px;
        color: #293845;
        line-height: 35px;
        font-weight: 700;

        margin-top: 30px;
    }

    p{
        font-size: 22px;
        color: #293845;
        line-height: 26px;
        font-weight: 400;
    }
`;

const Btn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    margin-top: 50px;

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