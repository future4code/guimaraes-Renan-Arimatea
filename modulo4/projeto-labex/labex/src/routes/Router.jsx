import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
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
                <Route exact path="/pages/ListTripsPage" element={<TripDetailsPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route exact path="/admin/trips/create" element={<CreatetripPage/>}/>
                <Route exact path="/admin/trips/:id" element={<ApplicationFormPage/>}/>
                </Routes>
                <FooterMenu/>
            </BrowserRouter>
        </div>
    )
}

export default Router
