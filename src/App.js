import React from "react";

// what {fav} means?
// inside of props, I am going to use the "fav" object

function Food({ fav }) {
  //console.log(props);            //see what properties are in props
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hlello world!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="gogi" />
      <Food fav="pho" />
    </div>
  );
}

export default App;
