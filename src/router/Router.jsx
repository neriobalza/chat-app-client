import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Views
import Home from "../views/Home";
import TelegramK from "../views/TelegramK";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/k" element={<TelegramK />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
