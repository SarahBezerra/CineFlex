import {React, useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SeatsList from "./SeatsList";
import Inputs from "./Inputs";
import SucessButton from "./SucessButton";

export default function SeatsContainer(props) {

    const [ selections, setSelections ] = useState(props.seats);
    const [ inputName, setInputName ] = useState("");
    const [ inputCPF, setInputCPF ] = useState("");

    return(
    <>
    <Seats>
        <SeatsList seats={props.seats} selections={selections} setSelections={setSelections} />
    </Seats>

    <Subtitle>
        <div><div className="selected"/>Selecionado</div>
        <div><div className="available"/>Disponível</div>
        <div><div className="unavailable"/>Indisponível</div>
    </Subtitle>

    <Inputs inputName={inputName} setInputName={setInputName} inputCPF={inputCPF} setInputCPF={setInputCPF} />

    <SucessButton selections={selections} inputName={inputName} inputCPF={inputCPF} dataSucess={props.dataSucess} setDataSucess={props.setDataSucess} />
    </>
    );
}

const Seats = styled.div`
    width: 325px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-bottom: 10px;
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