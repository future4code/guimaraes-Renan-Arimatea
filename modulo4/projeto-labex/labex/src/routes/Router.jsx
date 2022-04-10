import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import TripDetailsPageMarte from "../pages/TripDetailsPage/Marte/TripDetailsPageMarte";
import TripDetailsPageLua from "../pages/TripDetailsPage/Lua/TripDetailsPageLua";
import TripDetailsPageEuropa from "../pages/TripDetailsPage/Europa/TripDetailsPageEuropa";
import TripDetailsPageSaturno from "../pages/TripDetailsPage/Saturno/TripDetailsPageSaturno";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import CreatetripPage from "../pages/CreateTripPage/CreateTripPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import HeaderMenu from "../components/Header/HeaderMenu";
import FooterMenu from "../components/Footer/FooterMenu";

const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <HeaderMenu/>
                <Routes>
                <Route index element={<HomePage/>}/>
                <Route exact path="/trips/list" element={<ListTripsPage/>}/>
                <Route exact path="/pages/tripspage/marte" element={<TripDetailsPageMarte/>}/>
                <Route exact path="/pages/tripspage/lua" element={<TripDetailsPageLua/>}/>
                <Route exact path="/pages/tripspage/europa" element={<TripDetailsPageEuropa/>}/>
                <Route exact path="/pages/tripspage/saturno" element={<TripDetailsPageSaturno/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route exact path="/admin/trips/create" element={<CreatetripPage/>}/>
                <Route exact path="/trips/:id" element={<ApplicationFormPage/>}/>
                </Routes>
                <FooterMenu/>
            </BrowserRouter>
        </div>
    )
}

export default Router
