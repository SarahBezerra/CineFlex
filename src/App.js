import { React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ChooseMovie from './components/ChooseMovie';
import SessionTimes from "./components/SessionTimes";
import Seats from "./components/Seats";
import Sucess from "./components/Sucess";

export default function App() {

    const [ dataSucess, setDataSucess ] = useState({});

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ChooseMovie />} />
                <Route path="/sessoes/:idFilme" element={<SessionTimes />} />
                <Route path="/assentos/:idSessao" element={<Seats dataSucess={dataSucess} setDataSucess={setDataSucess} />} />
                <Route path="/sucesso" element={<Sucess dataSucess={dataSucess} />} />
            </Routes>
        </BrowserRouter>
    );
}