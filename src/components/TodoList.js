import React, { Component } from 'react'
import Lists from './Lists'

export class TodoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        task:'',
        items:[]
    }
  }
  onChangeHandler=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  addItem=(e)=>{
    e.preventDefault()
    if (this.state.task!==""){
    this.setState({
        items:[...this.state.items,this.state.task],
        task:''
    })
  }
  }
  removeItems=(index)=>{
    const items= this.state.items.filter((item, itemIndex) => {
    return itemIndex!== index
    })
    this.setState({ items});
    }
 
  render() {
    return (
      <div>
        <form>
            <input type='text' name="task"onChange={this.onChangeHandler} value={this.state.task} placeholder='Enter Task'/>
            <button type='submit' onClick={this.addItem}>Add Task</button>
        </form>
        <Lists items={this.state.items}
                delete={this.removeItem}/>
      </div>
    )
  }
}

export default TodoList
