import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SucessButton(props) {

    console.log(props.selections)
    console.log(props.inputName)
    console.log(props.inputCPF)

    function VerifySeats(seat){
        return seat.isSelected === true;
    }

    const selected_seats = props.selections.filter(VerifySeats);
    console.log(selected_seats)

    if(selected_seats.length !== 0 && props.inputName.length !== 0 && props.inputCPF.length !== 0){
        const infos = {ids: selected_seats, name: props.inputName, cpf: props.inputCPF}; 
        return(
            <Bnt>
                <Link to={"/sucesso"}>
                    <div onClick={() => props.setDataSucess({...infos})}>Reservar assento(s)</div>
                </Link>
            </Bnt>
        );
    }else{
        return(
            <Bnt>
                <div>Reservar assento(s)</div>
            </Bnt>
        );
    }
}

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