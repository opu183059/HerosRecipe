import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

const Chefards = (props) => {
  //   const cardData = props;
  //   console.log(cardData);
  return (
    <div>
      <div className="shadow-card p-4 text-center flex flex-col transition duration-200 rounded-xl shadow-md hover:backdrop-blur-sm border-1 ring-0 ring-amber-500 border-amber-600 hover:shadow-xl hover:-mt-2">
        <div className="avatar">
          <div className="w-48 mx-auto">
            <LazyLoadImage
              className="max-w-48 rounded-xl border-2 ring-3 ring-amber-900 ring-offset-1 ring-offset-amber-800"
              src={props.cdata.profile_picture}
              alt="chef image"
            />
          </div>
        </div>
        <div className="chefDetails text-base font-normal">
          <h4 className="font-medium text-2xl text-amber-700 font-akaya mt-4">
            {props.cdata.name}
          </h4>
          <p className="">
            Years of experience:
            <span className="ms-1 font-bold">
              {props.cdata.years_of_experience}
            </span>
          </p>
          <p className="">
            Number of Recipe:
            <span className="ms-1 font-bold">
              {props.cdata.number_of_recipes}
            </span>
          </p>
          <p className="mb-3">
            Likes:
            <span className="ms-1 font-bold">{props.cdata.likes}k</span>
          </p>
          <p>
            Ratings:
            <span className="ms-1 font-bold text-amber-800">
              {props.cdata.rating.number}
            </span>
          </p>
          <p className="mb-3">
            <Rating
              readonly
              placeholderRating={props.cdata.rating.number}
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
          <button className="px-3 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-700 to-amber-800 hover:bg-gradient-to-l">
            <Link to={"/recipe/" + props.cdata.id}>View Recipe</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chefards;
