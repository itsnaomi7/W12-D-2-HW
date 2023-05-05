const React = require("react")

const myStyle = {

    backgroundColor: "#000000",
    textAlign: "center",
    color: "#ffe424",
};

class Index extends React.Component {
    render() {
      const {pokemon} = this.props;
        return (
        <div style={myStyle}>
         <h1>Pokemon Index</h1>
         <a href="/pokemon/new">Add new Pokemon</a>
         <ul>
          {pokemon.map((pokemon, index) => {
            return (
              <li key={index}>
                <a href={`/pokemon/${pokemon._id}`}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
          </div>
        );
      }
    }
  
  module.exports = Index