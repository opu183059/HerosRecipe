import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Authcontect } from "../providers/AuthProvider";
import Recipedetailscard from "./Recipedetailscard";
import Rating from "react-rating";
import { ToastContainer } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipe = () => {
  const { id } = useParams();
  const { data } = useContext(Authcontect);
  //   console.log(id);
  //   console.log(data);
  const recipe = data?.find((recipe) => recipe.id == id);
  // console.log(recipe);
  // console.log(recipe.recipes);

  return (
    <div>
      <div className="banner mb-10">
        {/* banner section  */}
        <div className="hero min-h-full bg-base-100 my-1 md:my-20 px-0 md:px-24">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <LazyLoadImage
              src={recipe?.profile_picture}
              className=" max-w-xs md:max-w-sm rounded-lg shadow-2xl"
              effect="blur"
            />
            <div className=" text-center md:text-left ">
              <h1 className="text-amber-700 text-4xl md:text-5xl lg:text-7xl font-akaya font-bold">
                {recipe?.name}
              </h1>
              <p className="py-6">{recipe?.short_bio}</p>
              <p className="flex items-center">
                Personal rating:
                <span className="ms-1 font-bold text-amber-700">
                  {recipe?.rating.number}
                </span>{" "}
                out of 5
              </p>
              <p className="-ms-1">
                <Rating
                  readonly
                  placeholderRating={recipe?.rating.number}
                  emptySymbol={
                    <svg
                      aria-hidden="true"
                      className="w-7 h-7 text-gray-300 dark:text-white-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  }
                  placeholderSymbol={
                    <svg
                      aria-hidden="true"
                      className="w-7 h-7 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      aria-hidden="true"
                      className="w-7 h-7 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  }
                ></Rating>
              </p>
            </div>
          </div>
        </div>
        {/* experience sectin  */}
        <div className="likesExperience">
          <h1 className=" mt-8 text-base md:text-lg items-center flex justify-center font-semibold mb-5">
            <span className="text-2xl md:text-4xl text-amber-700 font-akaya me-2">
              {recipe?.name}
            </span>
            at a glance
          </h1>
          <div className="flex justify-center ">
            <div className="stats shadow border-0 p-4 md:border-2 border-amber-700">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <img
                    className="inline-block w-8 h-8 stroke-current"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Heart_icon_red_hollow.svg"
                    alt=""
                  />
                </div>
                <div className="stat-title text-gray-600">Total Likes</div>
                <div className="stat-value text-amber-800">
                  {recipe?.likes}k
                </div>
                <div className="stat-desc text-gray-600">
                  {recipe?.rating.number * 10}% more than last month
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img
                    className="inline-block w-8 h-8 stroke-current"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/achievement-award-medal-icon.svg"
                    alt=""
                  />
                </div>
                <div className="stat-title text-gray-600">Experience</div>
                <div className="stat-value text-amber-800">
                  {recipe?.years_of_experience}
                </div>
                <div className="stat-desc text-gray-600">Successful years</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={recipe?.profile_picture} />
                    </div>
                  </div>
                </div>
                <div className="stat-title text-gray-600">Successfully</div>
                <div className="stat-value text-amber-800">
                  {recipe?.number_of_recipes}
                </div>
                <div className="stat-desc text-gray-600">Recipe's done yet</div>
              </div>
            </div>
          </div>
        </div>
        {/* Recipies cards */}
        <h1 className="mt-10 text-base md:text-lg items-center flex justify-center font-semibold md:mb-8">
          <span className="text-2xl md:text-4xl text-amber-700 font-akaya me-2 mb-1">
            Recipe's ( {recipe?.number_of_recipes} )
          </span>
        </h1>
        {recipe?.recipes.map((recipeDetails) => (
          <Recipedetailscard
            key={recipeDetails.id}
            recipeDetails={recipeDetails}
          ></Recipedetailscard>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipe;
