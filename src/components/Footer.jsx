import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-amber-600">
        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:px-8 px-5 py-16">
          <div className="col-span-4">
            <p className="text-gray-400 text-sm mb-3">
              Cooking is an art, and we are here to help you create your
              masterpiece. Follow us on social media for more recipe ideas and
              cooking tips. We believe that food brings people together, and we
              are so glad to be a part of your culinary journey. Let us know
              what you think of our recipes - we love hearing from our readers.
            </p>
            <p className="text-gray-400 text-sm">
              At{" "}
              <span className="text-amber-600 font-akaya text-base">
                HEROs recipe
              </span>
              , we're passionate about good food and great cooking. Whether
              you're a seasoned chef or a kitchen newbie, we've got something
              for everyone. Thanks for being a part of our community!
            </p>
          </div>
          <ul>
            <h1 className="mb-1 font-semibold">Support</h1>
            <p className="text-gray-400 text-sm mb-3">About US</p>
            <p className="text-gray-400 text-sm mb-3">Work</p>
            <p className="text-gray-400 text-sm mb-3">Career</p>
          </ul>
          <ul>
            <h1 className="mb-1 font-semibold">Contact</h1>
            <p className="text-gray-400 text-sm mb-3">
              1234 Elm Street <br />
              Anytown, USA 12345
            </p>
            <p className="text-gray-400 text-sm mb-3">
              +454125 1584 333 <br />
              112-5599-558
            </p>
          </ul>
        </div>
        <div className="divider w-10/12 mx-auto h-0.5 bg-amber-700"></div>
        <div className="w-10/12 mx-auto flex flex-row justify-center pt-2 text-gray-400 text-sm pb-12">
          <span>© 2023 HEROs recipe - All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
