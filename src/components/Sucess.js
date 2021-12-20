import React from "react";
import styled from "styled-components";

export default function Sucess(props) {
    console.log(props.dataSucess);
    return(
        <>
        <Title>
            Pedido feito com sucesso!
        </Title>

        <h2>Filme e sessão</h2>
        <p></p>
        <p></p>

        <h2>Ingressos</h2>
        {props.dataSucess.ids.map(info =>
            <p>{`Assento: ${info.name}`}</p>
        )}

        <h2>Comprador</h2>
        <p>{`Nome: ${props.dataSucess.name}`}</p>
        <p>{`CPF: ${props.dataSucess.cpf}`}</p>

        </>
    );
}

const Title = styled.h1`
    font-size: 24px;
`;