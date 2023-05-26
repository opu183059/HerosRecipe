import React, { useState } from "react";
import Rating from "react-rating";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipedetailscard = (props) => {
  //   const [disabbled, setDisabbled] = useState(false);
  const [toogle, settoogle] = useState(false);
  const recipeDetails = props.recipeDetails;
  //   console.log(recipeDetails);
  const notify = () =>
    toast.success("️Added to Fabourites ❤️", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <div className="RecipiesCard px-5 md:px-24 mb-8">
        <div className="card lg:card-side bg-base-100 shadow-xl transition duration-200 rounded-xl hover:backdrop-blur-sm hover:shadow-2xl">
          <figure className="w-auto md:w-6/12 p-6">
            <div>
              <h2 className="card-title text-lg md:text-xl font-bold">
                Name:
                <span className="ms-1 text-amber-800">
                  {recipeDetails.name}
                </span>
              </h2>
              <h4 className="-mt-1 mb-2">{recipeDetails.description}</h4>
              <p className="mb-4 -ms-1 flex items-center">
                <Rating
                  readonly
                  placeholderRating={recipeDetails.dish_rating}
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
                ></Rating>{" "}
                {recipeDetails.dish_rating} out of 5
              </p>
              <LazyLoadImage
                className="rounded-xl"
                src={recipeDetails.dish_picture}
                alt="Album"
                effect="blur"
              />
              <div className="card-actions justify-start mt-4">
                <div onClick={notify}>
                  <button
                    disabled={toogle}
                    onClick={() => settoogle(!toogle)}
                    className="btn btn-primary text-white border-none bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
                  >
                    {toogle ? "Added to fabourite" : "Add to fabourite"}
                  </button>
                </div>
              </div>
            </div>
          </figure>
          <div className="card-body w-auto md:w-6/12">
            <h3 className="font-bold">Ingredients:</h3>
            <ol className="-mt-2.5">
              {recipeDetails.ingredients.map((ingredients, index) => (
                <li key={index}>{ingredients}</li>
              ))}
            </ol>
            <h3 className="font-bold">Coocking Method:</h3>
            <ol className="-mt-2.5">
              {recipeDetails.instructions.map((instructions, index) => (
                <li key={index}>{instructions}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipedetailscard;
