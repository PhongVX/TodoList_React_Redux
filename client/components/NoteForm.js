import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component{
    add(){
        var dispatch=this.props.dispatch;
       dispatch({type:'ADD',item:this.refs.txt.value});
    }
    toggle(){
        var dispatch=this.props.dispatch;
        dispatch({type:'IS_ADDING'});
    }
    render(){
        if(this.props.isAdding){
            return (
                <div>
                    <input ref="txt" type="text"/>
                    <button onClick={this.add.bind(this)}>Lưu</button>
                    <button onClick={this.toggle.bind(this)}>Hủy</button>
                </div>
            );
         }
         else{
            return (
                <div>
                    <button onClick={this.toggle.bind(this)}>Add</button>
                </div>
            );
         }
    }
}

module.exports=connect(function(state){
    return {isAdding:state.isAdding,mang:state.mang}
})(NoteForm);