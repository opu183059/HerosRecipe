import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Erroorpage = () => {
  const { error } = useRouteError();
  return (
    <div>
      <section className="flex items-center h-screen p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl mb-8 text-amber-600">
              {error?.message}
            </p>
            <div className="mx-auto">
              <img
                src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif"
                alt=""
              />
            </div>
            <Link
              to="/"
              className="px-6 py-3 font-normal text-base text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Erroorpage;
