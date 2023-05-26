import React from "react";

const Galary = () => {
  return (
    <div className="p-4 md:p-14 bg-base-100">
      <h1 className="text-base md:text-lg items-center flex justify-center font-semibold mb-5">
        special from
        <span className="text-3xl md:text-5xl text-amber-600 font-akaya ms-2">
          HEROs recipe
        </span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.acouplecooks.com/wp-content/uploads/2019/09/Sweet-Potato-Wedges-004.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Parmesan-Slider-Bake_EXPS_MTCBBZ17_204498_D03_01_3b-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thespruceeats.com/thmb/nl_XhW7KXN8cbw6BcSE4W8Wegww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/balsamic-peppers-recipe-1375730-hero-05-41068aab9c544459accaf39ef13d936f.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.eatingwell.com/thmb/5T84-TQbHMpEK00iaaq7qr0p0qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roasted-potato-brussels-1244-98a9420007bf44d1b33df632a55de8b7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://hips.hearstapps.com/hmg-prod/images/vegetable-side-dish-recipes-veggie-melange-1657226312.jpeg?resize=480:*"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_30/2943911/190723-easy-chow-mein-al-1414.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.acouplecooks.com/wp-content/uploads/2019/09/Sweet-Potato-Wedges-004.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://a.cdn-hotels.com/gdcs/production196/d970/cd40235b-5990-4067-8c05-c7d04711a312.jpg?impolicy=fcrop&w=800&h=533&q=medium"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.foodandwine.com/thmb/pGQ5LUPdgCHf6AZXAj5ah8mZPJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Bites-of-2022-XL-MAG1022-2000-7288326c863d4665acfaed7112ae98a5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.archanaskitchen.com/media/k2/items/cache/b20e1b0483ae02403352523456c51596_XL.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.lastingredient.com/wp-content/uploads/2016/08/burst-tomato-pasta15.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indian-side-dishes-1599484782.jpg?crop=0.332xw:0.664xh;0.668xw,0.173xh&resize=640:*"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;
