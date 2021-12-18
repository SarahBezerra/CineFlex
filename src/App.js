import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useState } from "react-router-dom";
import Header from "./components/Header";

export default function App() {

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}