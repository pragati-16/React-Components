"use strict";

/* const App = () => {
    return React.createElement(
        "div",  // tag
        {id:'website-title'},   // attributes with the element
        React.createElement(
            "h3",
            {},
            "Dog Website"
        ), // content can be another component also.
    );
};

ReactDOM.render(
    React.createElement(  // component to render
        App
        ),
    document.getElementById('root') // place to render
    );   */
"./dog";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Dog = function Dog(props) {
  return React.createElement("div", {}, [React.createElement('h3', {}, props.name), React.createElement('h3', {}, props.weight), React.createElement('h3', {}, props.height)]);
};

var App = function App() {
  var arr = [1, 2, 3, 4];
  return React.createElement("div", // tag
  {
    id: 'website-title'
  }, // attributes with the element
  [React.createElement("h3", {}, "Dog Website")].concat(_toConsumableArray([arr].map(function (item) {
    return React.createElement("h1", {}, item);
  })), [React.createElement(Dog, {
    name: "Bull Terrier",
    weight: "50.70 Kg",
    breed: "Terrier"
  }), React.createElement(Dog, {
    name: "PitBull",
    weight: "50.70 Kg",
    breed: "Bull"
  }), React.createElement(Dog, {
    name: "Puppy",
    weight: "5.70 Kg",
    breed: "husky"
  })]) // content can be another component also.
  );
};

ReactDOM.render(React.createElement( // component to render
App), document.getElementById('root') // place to render
);
//# sourceMappingURL=App.dev.js.map
