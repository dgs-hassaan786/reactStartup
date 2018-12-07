import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
console.log(element);

//We are rendering the react element in the dom
//first param is the element which has to render
//second param is where to render
ReactDOM.render(element, document.getElementById("root"));
