import React from "react";

const Todayevent = () => {
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/826tmz2/l-intro-1669141955.jpg')] bg-cover bg-fixed">
      <div className="hero-content text-center">
        <div className="max-w-screen-lg border-double border-2 p-9 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl text-amber-500 font-akaya drop-shadow-[0_35px_35px_rgba(255, 255, 255)]">
            Housewife coocking competition
          </h1>
          <p className="py-6 text-slate-100">
            Join us for our upcoming cooking competition! It's open to anyone
            who loves to cook, whether you're a professional chef or a home
            cook. There will be exciting challenges and cash prizes for the
            winners. The event is on
            <span className="ms-1 text-amber-500">
              5th June at 11am at HERO Convention Hall, 1234 Elm Street Anytown,
              USA 12345
            </span>
            . Register by 25th MAY and provide your name and contact
            information, along with a brief description of the dish you plan to
            prepare. We'll provide all the cooking equipment and ingredients.
            Can't wait to see you there!
            <br />
            Best regards,
            <span className=" ms-1 font-akaya text-amber-500">
              HERO's recepie
            </span>
          </p>
          <label
            htmlFor="my-modal"
            className="btn px-10 ms-2 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
          >
            Register
          </label>
          <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Registration</h3>
                <p className="py-4">
                  Please Contact with this <br /> email id :
                  herosrecipe@gmail.com <br />
                  mobile: +445 2252 12
                </p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    OK
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todayevent;
