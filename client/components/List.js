import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import {connect} from 'react-redux';


class List extends React.Component{
 
    // deleteNote(index){
    //     this.props.mang.splice(index,1);
    //     this.setState(this.props);
    // }
    // addNote(value){
    //     this.state.notes.push(value);
    //     this.setState(this.state);
    // }
    render(){
        // var list=this;
        // handleAdd={list.addNote.bind(this)}
        return (
            <div>
                <NoteForm/>
                {
                    
                    this.props.mang.map(function(n,i){
                       return  <Note  index={i} key={i}>{n}</Note>
                    })
                }
            </div>
        );
    }
}


module.exports=connect(function(state){
    return {mang:state.mang}
})(List);