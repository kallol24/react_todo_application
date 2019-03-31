import React, { Component } from 'react';
import './App.css';
//import TodoList from './components/TodoList';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'


class App extends Component {
  
    state = {
      todos: []
      
    }
  
    markComplete=(id)=>{
      alert(`${id} completed`)
      this.setState({
        todos: this.state.todos.map((todo)=>{
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      })
    }

    delTodo=(id)=>{
      alert(`${id} deleted`)
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id )]
      })
    }

    addTodo=(tasks)=>{ 
      console.log(tasks)
      const newTodo={
        id: uuid.v4(),
        title: tasks,
        completed: false
      }
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
    }
  render(){
      console.log(this.state.todos)
      return(
      <div className="App">
        <AddTodo addTodo={this.addTodo}/>
        <Todo todos={this.state.todos}
        markComplete={this.markComplete}
        delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
