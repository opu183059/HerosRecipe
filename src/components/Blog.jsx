import React, { createRef, useState } from "react";

import Pdf from "react-to-pdf";
const ref1 = createRef();
const ref2 = createRef();
const ref3 = createRef();
const ref4 = createRef();

const Blog = () => {
  const [download, setDownload] = useState(false);
  const [download2, setDownload2] = useState(false);
  const [download3, setDownload3] = useState(false);
  const [download4, setDownload4] = useState(false);
  const ref = React.createRef();
  return (
    <div className="bg-[url('https://i.ibb.co/Bf6LQFh/130614114257-malaysia-food.jpg')] bg-cover bg-fixed py-10">
      <h1 className=" pb-5 text-base md:text-lg text-gray-300 items-center flex justify-center font-semibold">
        Wellcome to
        <span className="text-3xl md:text-5xl text-amber-500 font-akaya ms-2">
          HERO Blogs's
        </span>
      </h1>
      {/* -------------------------------------------------------- */}

      {/* ---------------------- question 1 ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <Pdf targetRef={ref1} filename="question1.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf}>
                <button
                  onClick={() => setDownload(true)}
                  className="btn mt-6 -mb-3 ms-8 btn-primary text-white border-none bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
                  disabled={download}
                >
                  {download ? "Downloaded" : "▼ Download"}
                </button>
              </div>
            )}
          </Pdf>
          <div ref={ref1} className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              Differences between controled and uncontroled components.
            </h1>
            <p>
              1. Controlled components are those where the value is controlled
              by React, while uncontrolled components are those where the value
              is controlled by the DOM.
            </p>
            <p>
              2. In controlled components, the user input is handled via event
              handlers that update the state, while in uncontrolled components,
              the user input is directly accessed via refarencess.
            </p>
            <p>
              3. Controlled components rely on the state to manage their values,
              while uncontrolled components rely on refs to access their values.
            </p>
            <p>
              4. Controlled components provide a one-way data flow, where the
              parent component manages the state and passes it down as props to
              the child components. Uncontrolled components, on the other hand,
              provide a two-way data flow, where the child component can
              directly modify the value of the DOM element.
            </p>
            <p>
              5. Controlled components can be slower to render, while
              uncontrolled components can be faster.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- question 2 ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <Pdf targetRef={ref2} filename="question2.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf}>
                <button
                  onClick={() => setDownload2(true)}
                  className="btn mt-6 -mb-3 ms-8 btn-primary text-white border-none bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
                  disabled={download2}
                >
                  {download2 ? "Downloaded" : "▼ Download"}
                </button>
              </div>
            )}
          </Pdf>
          <div ref={ref2} className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              How to validate react props using proptype?
            </h1>
            React provides a built-in library called prop-types that can be used
            to validate props passed to a component. PropTypes is React's
            internal mechanism for adding type checking to component props.
            React components use a special property called propTypes to set up
            type checking. Here's an example of how to use prop-types to
            validate the props of a React component:
            <p>
              First, install the prop-types library using npm: npm install
              prop-types
            </p>
            <p>
              Import the PropTypes object from the prop-types library at the top
              of your component file: import PropTypes from 'prop-types';
            </p>
            <p>
              Define the expected type and shape of each prop using the
              PropTypes object: <br />
              MyComponent.propTypes = <br />
              name: PropTypes.string.isRequired, <br />
              age: PropTypes.number.isRequired, <br />
              email: PropTypes.string,
            </p>
            <p>
              In this example, the propTypes object specifies that the name and
              age props are required and must be of type string and number
              respectively. The email prop is optional and must be of type
              string. The address prop is an object that has a specific shape
              with required street, city, state, and zip props, each of which
              must be of type string.
            </p>
            <p>
              When a prop fails validation, a warning will be logged to the
              console. You can also use propTypes to document the expected props
              for your component, making it easier for other developers to
              understand how to use your component.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- question 3 ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <Pdf targetRef={ref3} filename="question3.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf}>
                <button
                  onClick={() => setDownload3(true)}
                  className="btn mt-6 -mb-3 ms-8 btn-primary text-white border-none bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
                  disabled={download3}
                >
                  {download3 ? "Downloaded" : "▼ Download"}
                </button>
              </div>
            )}
          </Pdf>
          <div ref={ref3} className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              Differences between node js and express js.
            </h1>
            <p>
              Node.js is a runtime environment for executing JavaScript code
              outside of a web browser, while Express.js is a web application
              framework that runs on top of Node.js and provides a set of tools
              and features for building web applications.
            </p>
            <p>Here are some key differences between Node.js and Express.js:</p>
            <ol className="list-decimal ms-4">
              <li>
                Node.js is a runtime environment, while Express.js is a web
                application framework.
              </li>
              <li>
                Node.js is low-level and requires a lot of boilerplate code to
                build a web application from scratch. Express.js provides a more
                high-level abstraction that simplifies the process of building a
                web application.
              </li>
              <li>
                Node.js provides the foundation for building server-side
                applications, while Express.js provides a set of tools and
                features that make it easier to build web applications using
                Node.js.
              </li>
              <li>
                Node.js comes with built-in modules that allow developers to
                perform tasks such as reading and writing files, handling HTTP
                requests and responses, and working with databases. Express.js
                builds on these modules to provide a more streamlined way to
                handle HTTP requests and responses, implement routing, and more.
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* ---------------------- question 4 ---------------------- */}
      <div className="flex justify-center mb-10">
        <div className="card w-10/12 md:w-6/12 shadow-2xl bg-base-100">
          <Pdf targetRef={ref4} filename="question4.pdf">
            {({ toPdf }) => (
              <div onClick={toPdf}>
                <button
                  onClick={() => setDownload4(true)}
                  className="btn mt-6 -mb-3 ms-8 btn-primary text-white border-none bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
                  disabled={download4}
                >
                  {download4 ? "Downloaded" : "▼ Download"}
                </button>
              </div>
            )}
          </Pdf>
          <div ref={ref4} className="card-body">
            <h1 className="text-xl font-bold text-amber-800">
              What is a custom hook and why i should create a custom hook?
            </h1>
            <p>
              A custom Hook is a JavaScript function whose name starts with
              ”use” and that may call other Hooks. Custom React JS hooks can
              help developers save time, are reliable, reusable, and make the
              code clean. Creating custom React JS hooks is relatively easy, and
              you can search for many open sources where you can get some custom
              hooks from the library already created by developers.
            </p>
            <p>
              Controlled components rely on the state to manage their values,
              while uncontrolled components rely on refs to access their values.
            </p>

            <p>
              Creating a custom hook can be beneficial in a number of ways:{" "}
              <br />
              1. Reusability: By encapsulating reusable logic in a custom hook,
              you can use that logic across multiple components, making it
              easier to maintain and update your code. <br />
              2. Abstraction: Custom hooks can abstract away complex or
              repetitive logic, making your code easier to read and more
              modular. <br />
              3. Organization: Custom hooks can help you organize your code
              better by separating concerns and grouping related logic together.{" "}
              <br />
              4. Testing: Custom hooks can be easily tested in isolation, making
              it easier to write unit tests for your application.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- question ---------------------- */}
    </div>
  );
};

export default Blog;
