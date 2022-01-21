import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({ weekday, date, showtimes }) {
    return(
        <Sessions>
            <h2>{`${weekday} - ${date}`}</h2>

            <ul>
            {showtimes.map(hour =>
                <Link key={hour.id} to={`/assentos/${hour.id}`}>
                    <li>{hour.name}</li>
                </Link>
            )}
            </ul>
        </Sessions>
    );
}

const Sessions = styled.div`
    margin-bottom: 25px;

    h2{
        font-size: 20px;
        line-height: 23.44px;
        color: #293845;
        margin-bottom: 15px;
    }

    ul{
        display: flex;
    }

    a{
        text-decoration: none;
    }

    li{
        background-color: #E8833A;
        width: 83px;
        height: 43px;
        border-radius: 3px;
        margin-right: 9px;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
        font-size: 18px;
        color: #FFFFFF;
        line-height: 21px;
        letter-spacing: 0.02em;
    }
`;