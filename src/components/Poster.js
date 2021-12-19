import { React } from "react";
import { Link } from "react-router-dom";

export default function Poster({ id, posterURL, title }) {
    return(
        <Link to={`/sessoes/${id}`}>
            <img src={posterURL} alt={title}/>
        </Link>
    );
}