const React = require("react");

class New extends React.Component{
    render() {
        return(
            <div>
                <h1>Create a NEW Pokemon!</h1>
                <form action="/pokemon" method='POST'>
                    Name: <input type="text" name="name"/>
                <input type="submit" value="Create Pokemon"/>
                </form>
            </div>
        )
    }
}

module.exports = New