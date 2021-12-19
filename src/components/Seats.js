import axios from "axios";
import { useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";

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
        <p>test</p>
        </>
    );
}