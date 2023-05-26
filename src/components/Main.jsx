import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigation } from "react-router-dom";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div>
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-amber-700"></div>
            <p className="font-bold text-xl text-amber-700 ms-2">Loading....</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
