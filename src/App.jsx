import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyNav from "./components/MyNav";

import Register from "./components/Register";
import Login from "./components/Login";
import AnnuncioDetails from "./components/AnnuncioDetails";
import MyPrenotazioni from "./components/MyPrenotazioni";
import Affitta from "./components/Affitta";
import MyAnnunci from "./components/MyAnnunci";
import ModificaMyAnnuncio from "./components/ModificaMyAnnuncio";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [searchByFilter, setSearchByFilter] = useState("");

  const handleSearch = (filter) => {
    setSearchByFilter(filter);
  };

  return (
    <BrowserRouter>
      <MyNav onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home searchByFilter={searchByFilter} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/annunci/:id" element={<AnnuncioDetails />} />
        <Route path="/prenotazioni" element={<MyPrenotazioni />} />
        <Route path="/affitta" element={<Affitta />} />
        <Route path="/affitta/:annuncioId" element={<ModificaMyAnnuncio />} />
        <Route path="/annunci" element={<MyAnnunci />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
