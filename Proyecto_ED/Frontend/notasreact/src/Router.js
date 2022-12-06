import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import New from "./components/New";
import Articles from "./components/Articles";
import Chazas from "./components/Chazas";
import Newchaza from "./components/Newchaza";
const Router = () => {

    return(

        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<New />} />
                <Route exact path='articles' element={<Articles />} />
                <Route exact path='creacionChaza' element={<Newchaza />} />
                <Route exact path='chazas' element={<Chazas />} />
            </Routes>
        </BrowserRouter>

    );

}

export default Router;