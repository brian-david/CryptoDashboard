var React = require("react");
var Note = require("./Note");
var Link = require("react-router-dom").Link;

import idGenerator from 'react-id-generator';

class NotesList extends React.Component{
    constructor(){
        super();
        this.htmlID = idGenerator();
        this.state = {
            notes: [],
            ids: 0
        }
    }

    componentWillMount(){
        console.log("NotesList Component");
        var _notes = [
            {
                "title": "How to trade",
                "content":"you do stuff and then do some other stuff, and then after you've done the other stuff, you do even more stuff"
            },
            {
                "title":"Crypto Jargon",
                "content":"A value pair is the correclation between two currencies and their values wieghed against each other"
            }
        ];
        this.setState({notes:_notes});

    }

    _renderList(){
        return this.state.notes.map((note) => {
            return <li key={this.state.ids++} className="list-group-item list-group-item-dark btn-dark">{note.title}</li>
        })
    }

    _handleNoteDisplay(noteTitle, noteContent){
        this.props.showNote(noteTitle, noteContent)
    }

    _showForm(){
        this.props.showForm();
    }


    render(){
        return(
            <ul className="list-group list-group-flush">
                <li onClick={this._showForm.bind(this)} className="list-group-item list-group-item-info btn-info">New Note</li>
                {this._renderList()}
            </ul>    
        );
    }
}

module.exports = NotesList;