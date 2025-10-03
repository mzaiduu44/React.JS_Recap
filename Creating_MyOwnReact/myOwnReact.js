function customRndr(reactEle, recievedElement) {
  const domlement = document.createElement(reactEle.type);
  // domlement.innerHTML = reactEle.children;
  // domlement.setAttribute("href", reactEle.props.href);
  // domlement.setAttribute("target", reactEle.props.target);
  // console.log(domlement);
  // console.log(recievedElement);
  // recievedElement.appendChild(domlement);

  domlement.innerHTML = reactEle.children;
  for (let prop in reactEle.props) {
    if (prop == "children") continue;
    domlement.setAttribute(prop, reactEle.props[prop]);
    console.log(reactEle.props[prop]);

    recievedElement.appendChild(domlement);
  }
}

const createElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click here to visit Google",
};
const container = document.getElementById("root");

customRndr(createElement, container);

//Final Conclusion:- React has own kys to rendr any elment that means there pr defined syntax that it expct from us
// I have created my own custom rnder which is rendering "a" tag but in vite react app it will not excut czo of our custom defined keys. If i want to render it i just have pass th values without keys.
