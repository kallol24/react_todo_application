import React, {Component} from 'react'

class TodoItem extends Component{
    getStyle=()=>{
        return{
        background:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px 3ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render(){
        const {id, title} = this.props.todo //destructing
        return(
            <div style={this.getStyle()}>
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/>
               {title}
               <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
            </div>
        )
    }
}
const btnStyle={
    backgroundColor:'#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginLeft: '10px'
}

export default TodoItem