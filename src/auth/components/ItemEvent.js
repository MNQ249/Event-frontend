import React from 'react';


export default class ItemEvent extends React.Component {

    // updateItem = (e) => {
    //     e.preventDefault();
    //     this.
    // }

    deleteItem = (e) => {
    e.preventDefault();
    this.props.delete(this.props.id, this.props.user);
  }
  updateItem = (e) =>{
      e.preventDefault();
      this.props.update(this.props.id, this.props.user);
  }
    
  render() {
    return (
      <div className="itemEvent">
        <h2>{this.props.eventName}</h2>
        <sub>{this.props.when}</sub>
        <p>
          {this.props.discription}
        </p>
        <a href="#" className="btn btn-danger" onClick={this.deleteItem}>Delete</a>
         <a herf="#" className= "btn btn-warning" onClick={this.updateItem}>Update</a> 
      </div>
    );
    }
    }


 