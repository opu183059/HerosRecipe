import React, { useContext, useEffect, useState } from "react";
import Chefards from "./Chefards";
import { Authcontect } from "../providers/AuthProvider";

const Chef = () => {
  const { data } = useContext(Authcontect);

  return (
    <div className="p-4 md:p-24 bg-base-100">
      <h1 className="text-base md:text-lg items-center flex justify-center font-semibold mb-5">
        meet our
        <span className="text-3xl md:text-5xl text-amber-600 font-akaya ms-2">
          CHEF's
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
        {data.map((cdata) => (
          <Chefards key={cdata.id} cdata={cdata}></Chefards>
        ))}
      </div>
    </div>
  );
};

export default Chef;
