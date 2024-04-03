import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "boat";

const reactElement = React.createElement(
  "p",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Google Visit.   ",
  anotherUser 
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <MyApp />
  </>
);

// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
// ReactDOM.createRoot(document.getElementById("root")).render(App());
