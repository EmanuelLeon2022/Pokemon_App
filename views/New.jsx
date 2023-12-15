import React from "react";

function New() {
  return (
    <>
      <h1>Create A New Pokemon</h1>
      <form action="/pokemons" method="POST"><br/>
        Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
        Image: <input  style={{margin:"1em"}}type="text" name="img" /><br/>
        <input style={{margin:"1em"}} type="submit" value="Create Pokemon" />
      </form>
    </>
  );
}

export default New;