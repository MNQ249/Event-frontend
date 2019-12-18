import React from 'react';

import {Modal, Button} from 'react-bootstrap';
import {showListEvent,updateEvent,deleteEvent} from "../api";
import ItemEvent from './ItemEvent';

export default class ListEvent extends  React.Component{


    constructor(props){
        super(props)
        this.state = {
        listEvent:[],
        event:''
        }
    }
    
    componentDidMount(){
        {console.log(this.props)}
        showListEvent()
        .then((res)=>{
            // listEvent with assign to array events
            this.setState({listEvent: [...res.data.events]})
        })
        .catch((error) => {
            console.log(error);
          });

    }
    //method make delete event for by id
    deleteItem= (id, user) => {
      deleteEvent(id, user)
    .then((res)=>{
      const newEventList = this.props.events.filter((event) => {
          return event._id !== id;
       
    });

     this.setEvent({newEventList});
    })
    .catch((error) => {
      console.log(error);
      });
  }


  //method make update for event by id
  updateItem= (id, user) => {
    updateEvent(id, user)
  .then((res)=>{
    const newEventList = this.props.events.filter((event) => {
        return event._id !== id;
     
  });

  this.setEvent({newEventList});
  
  })
  .catch((error) => {
    console.log(error);
    });
}

    render(){
        
        console.log("list events: ",this.state.listEvent);
        const lolist = this.state.listEvent.map((item,key)=>{
            // return <li key={item.id}>{item.name} </li>;
            return <li><ItemEvent eventName={item.eventName}
                              id={item._id}
                              when={item.when}
                              description={item.description}
                              delete={this.deleteItem}
                              update={this.updateItem}
                              key={key}
                              user={this.props.user}
                              setCurrentEvent={this.props.setCurrentEvent}
                            
            /></li>;
        })
        
    
        return(     
        <div className="list-group">
            <h1>Event List</h1>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
            <h1 className="mb-1"><ul>{lolist}</ul></h1>
            </div>
            </a>        
        </div>

        )
    }

}