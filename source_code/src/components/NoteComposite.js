var React = require("react");
var NotesList = require("./NotesList");
var NoteForm = require("./NoteForm");
var Note = require("./Note");

class NoteComposite extends React.Component{
    constructor(){
        super();
        this.state = {
            noteTitle: "",
            noteContent: "",
            showForm: false
        }
    }

    _displayNote(noteTile, noteContent){
        return null;
    }

    _showForm(){
        this.setState({
            showForm: true
        })
    }

    render(){
        const showForm = this.state.showForm;
        return(
            <div className="row h-100">
                <div className="col-3 p-0">
                    /*<NotesList showForm={this._showForm.bind(this)} showNote={this._displayNote.bind(this)}/>/*
                </div>
                <div className="col-9 h-100 py-3">
                    //{showForm? (<NoteForm />):(null)}
                </div>
            </div>
        );
    }
}

module.exports = NoteComposite;