var React = require("react");

class Note extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "",
            content: ""
        }
    }

    componentWillMount(){
        this.setState({
            title: this.props.title,
            content: this.props.content
        })
    }

    _showThisNote(){
        this.state.showNote(this.state.title, this.state.content);
    }

    render(){
        return(
            <div>THIS IS A NOTE</div>
        );
    }
}

module.exports = Note;