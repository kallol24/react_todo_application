import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        tasks:''
    }

    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick=(e)=>{
        e.preventDefault()
        //passing state to app.js
        this.props.addTodo(this.state.tasks)
        this.setState({tasks:''})
    }
  render() {
    return (
      <form>
          <input type='text'
          name='tasks'
          placeholder='Add Tasks' 
          value={this.state.tasks}
          onChange={this.onChangeHandler}
          />
          <button type='submit' onClick={this.onClick}>Add</button>
      </form>
    )
  }
}

export default AddTodo
