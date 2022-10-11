import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar/Navbar";
import CompanyList from "./components/Company/CompanyList";
import CompanyForm from "./components/Company/CompanyForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-4">
      <Routes>
        <Route exact path="/" element={<CompanyList />} />
        <Route exact path="/companyForm" element={<CompanyForm />} />
        <Route exact path="/updateCompany/:id" element={<CompanyForm />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();