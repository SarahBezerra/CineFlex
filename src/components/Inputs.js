import { React } from "react";
import styled from "styled-components";

export default function Inputs(props) {
    return(
        <PersonalData>
            <div className="title">Nome do comprador:</div>
            <input
            type="text" placeholder="Digite seu nome..."
            value={props.inputName}
            onChange={e => props.setInputName(e.target.value)}
            ></input>
            
            <div className="title">CPF do comprador:</div>
            <input
            type="text" placeholder="Digite seu CPF..."
            value={props.inputCPF}
            onChange={e => props.setInputCPF(e.target.value)}
            ></input>
        </PersonalData>
    );
}

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