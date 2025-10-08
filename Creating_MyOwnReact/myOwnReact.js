function customRndr(reactEle, recievedElement) {
  const domlement = document.createElement(reactEle.type);

  // domlement.innerHTML = reactEle.children;
  // domlement.setAttribute("href", reactEle.props.href);
  // domlement.setAttribute("target", reactEle.props.target);
  // console.log(domlement);
  // console.log(recievedElement);
  // recievedElement.appendChild(domlement);

  // Assign children to the created DOM element
  domlement.innerHTML = reactEle.children;

  // Loop through all props and set them as attributes (except 'children')
  for (let prop in reactEle.props) {
    if (prop === "children") continue;
    domlement.setAttribute(prop, reactEle.props[prop]);
    console.log(reactEle.props[prop]);

    // Append the created element to the received container
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

// Final Conclusion:
// React has its own keys and mechanisms to render elements,
// which means it expects a predefined syntax and structure from us.
// I have created my own custom render function that is rendering an "a" tag,
// but in a Vite React app, this will not execute because React uses its own rendering logic.
// If I want to render it manually, I would need to pass the values directly without using custom-defined keys.
