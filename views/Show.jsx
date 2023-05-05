const React = require("react")

const myStyleShow = {

  backgroundColor: "#242e31",
  textAlign: "center",
  color: "green",
};

class Show extends React.Component {
    render() {
      const pokemon = this.props.pokemon;
      const image = pokemon.img + ".jpg";
      return (
        <div style={myStyleShow}>
          <h1>"Gotta Catch 'em All" *whispers* pokemon....</h1>
          <h2>{pokemon.name}</h2>
          {/* <h3>{pokemon.name + pokemon.name.slice}</h3> */}
          <img src={`http://img.pokemondb.net/artwork/${pokemon.name}.jpg`}></img>
        <br />
        <a href="/pokemon" style={{color: 'white', paddingBottom: 50}}>Back</a>
    
        </div>
      )
    }
  }
  
  module.exports = Show
