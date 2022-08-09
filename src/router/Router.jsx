import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Views
import Home from "../views/Home";
import ChatApp from "../views/ChatApp";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatApp />} />
        <Route path="/login" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
