var React = require("react");

class NotesForm extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <form>
                <input type="text" value={this.state.note} onChange={this.handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

module.exports = NotesForm;