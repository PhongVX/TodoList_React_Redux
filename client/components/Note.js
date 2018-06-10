import React from 'react';
import {connect} from 'react-redux';

class Note extends React.Component{
 
    delete(){
        var {index,dispatch}= this.props;
        dispatch({type:'REMOVE_ITEM',index:index});
    }
    render(){
        return (
            <div className='div-note'>
                <p>{this.props.children}</p>
                <button onClick={this.delete.bind(this)}>Delete</button>
            </div>
        );
    }
}

module.exports=connect()(Note);