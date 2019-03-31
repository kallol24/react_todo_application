import React, { Component } from 'react'

export class Lists extends Component {
   
  removeItems=(index)=>{
    this.props.delete(index)
  }
    
  render() {
    return (
      <div>
        {this.props.items.map((item,index)=>
            <li className="Lists" key={index}>{item}
            <button type='button' onClick={this.removeItems(index)}>Remove</button>
            </li>)}
      </div>
    )
  }
}

export default Lists

          