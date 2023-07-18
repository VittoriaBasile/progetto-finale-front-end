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

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/annunci/:id" element={<AnnuncioDetails />} />
        <Route path="/prenotazioni" element={<MyPrenotazioni />} />
        <Route path="/affitta" element={<Affitta />} />
        <Route path="/annunci" element={<MyAnnunci />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
