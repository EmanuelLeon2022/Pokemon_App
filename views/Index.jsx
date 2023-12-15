import React from "react";
function Index(props) {
  return (
    <>
     <nav>
        <a href="/pokemons/new"><h1>Create a New Pokemon</h1></a>
      </nav>
      <ul>
        <h1>
          {" "}
          {props.pokemons.map((pokemon, i) => {
            return (
              <li
                style={{
                  borderRadius: "22px",
                  margin: "1em",
                  border: " solid grey",
                  textAlign: "center",
                }}
              >
                {" "}
                <a href={`/pokemons/${i}`}>{pokemon.name} </a>{" "}
              </li>
            );
          })}
        </h1>
      </ul>
     
    </>
  );
}
export default Index;