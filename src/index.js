import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import GetAllData from "./GetAllData";
import GetDataById from "./GetDataById";
import AddData from "./AddData";
import EditData from "./EditData";
import PageNotFound from "./NotFoundPage";
import Footer from "./Footer";
import GetAllFaculty from "./GetAllFaculty";
import Contact from "./Contact";
import About from "./About";
import GetFcultyById from "./GetFacultyById";
import AddFaculty from "./AddFaculty";


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/displaystu" element={<GetAllData />} />
          <Route path="/displaystu/:id" element={<GetDataById />} />
          <Route path="/displaystu/add" element={<AddData />} />
          <Route path="/displaystu/edit/:id" element={<EditData />} />

          <Route path="/displayfacu" element={<GetAllFaculty />} />
          <Route path="/displayfacu/:id" element={<GetFcultyById />} />
          <Route path="/displayfacu/add" element={<AddFaculty/>} />
          <Route path="/displayfacu/edit/:id" element={<EditData />} />

          <Route path="home" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
