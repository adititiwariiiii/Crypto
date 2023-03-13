import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";

const Home = () => {
  return (
    <CryptoProvider>
        <StorageProvider>
          <main
            className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-white font-nunito
    "
          >
            <div className="w-screen h-screen bg-purple fixed -z-10" />
            <Logo />
            <Navigation />

            <Outlet />
          </main>
        </StorageProvider>

    </CryptoProvider>
  );
};

export default Home;
