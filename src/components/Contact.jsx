import React from "react";

const Contact = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/Bf6LQFh/130614114257-malaysia-food.jpg')] bg-cover bg-fixed ">
      <div className="min-h-screen flex items-center justify-center">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-base md:text-lg items-center flex justify-center font-semibold mb-5">
              contact with
              <span className="text-3xl md:text-5xl text-amber-600 font-akaya ms-2">
                HERO's
              </span>
            </h1>
            <div className="form-control">
              <input
                type="text"
                placeholder="name"
                className="input input-bordered my-3"
              />

              <input
                type="text"
                placeholder="email"
                className="input input-bordered my-3"
              />
            </div>
            <div className="form-control">
              <textarea
                rows="4"
                type="text"
                placeholder="message"
                className="textarea textarea-bordered"
              ></textarea>
            </div>
            <button className="px-5 py-2 w-36 mx-auto mt-4 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
