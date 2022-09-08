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

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/displaystu" element={<GetAllData />} />
          <Route path="/displayfacu" element={<GetAllData />} />
          <Route path="/display/:id" element={<GetDataById />} />
          <Route path="/display/edit/:id" element={<EditData />} />
          <Route path="/displaystu/add" element={<AddData />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
