const React = require("react")

const myStyle = {
  color: '#ffe424',
  backgroundColor: '#110000',
  height: '17px',
};

class Index extends React.Component {
    render() {
        return (
          <div style={myStyle}>
         <h3>Pokemon Index</h3>
          </div>
        );
      }
    }
  
  module.exports = Index