
//FROM OTHERS


/**  
 * 01. Add heading using Javascript
 */
// const jsHeading = document.createElement('h1');
// jsHeading.innerHTML = 'Hello World From Javascript!';

// const jsRroot = document.getElementById('root');
// jsRroot.appendChild(jsHeading);


// /**
//  * 02. Add heading using React
//  */
// const reactHeading = React.createElement('h1', {}, 'Hello World From React!');
// const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
// reactRoot.render(reactHeading);


// /**
//  * Add nested HTML
//  */
// const nested = React.createElement('div', { id: 'parent' }, [
// 	React.createElement('div', { id: 'child1' }, [
// 		React.createElement('h1', {}, 'dddddHello, Iam H1 Tag Inside Child 1.'),
// 		React.createElement('h2', {}, 'Hello, Iam H2 Tag.')
// 	]),
// 	React.createElement('div', { id: 'child2' }, [
// 		React.createElement('h1', {}, 'Hello, Iam H1 Tag Child 2.'),
// 		React.createElement('h2', {}, 'Hello, Iam H2 Tag Child 2.')
// 	])
// ])

// reactRoot.render(nested);






//MYCODE  -------------------------------------------------------

const parent = React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"I ama h1 tag"),
    React.createElement("h2",{},"I ama h2 tag"),
    ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I ama h1 tag"),
    React.createElement("h2",{},"I ama h2 tag"),
    ]),
]);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//-------------------------------------------------------------------



//FROM OTHERS


// const heading = React.createElement("h1", { id: "key" }, "Hello everyone!");

// const h1 = React.createElement(
//   "h1",
//   { style: { color: "red" }, id: "key" },
//   "I am red"
// );

// const h2 = React.createElement(
//   "h2",
//   { style: { color: "green" }, id: "key" },
//   "I am green"
// );

// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   h1,
//   h2,
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);





