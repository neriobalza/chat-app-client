import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "../containers/Layout";
// Views
import Home from "../views/Home";
import Chats from "../views/Chats";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/k" element={<Chats />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Router;
