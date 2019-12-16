import React from 'react';

import {Modal, Button} from 'react-bootstrap';
import {showListEvent,updateEvent} from "../api";

export default class ListEvent extends  React.Component{


    constructor(props){
        super(props)
        this.state = {
        listEvent:[],
        event:''
        }
    }

    componentDidMount(){
        showListEvent()
        .then((res)=>{

            
            this.setState({listEvent: res.data.events})
        })
        .catch((error) => {
            console.log(error);
          });


          updateEvent()
          .then((res)=>{
            this.setState({event:res.data.events})
          })
          .catch((error) => {
            console.log(error);
          });
    }

    




    render(){
        console.log(this.state);
        let doDelete;
        const lolist = this.state.listEvent.map((item,key)=>{
            return <li key={item.id}>{item.name} </li>;

           
        })
        return(     
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"><ul>{lolist}</ul></h5>
            <button type="button" class="btn btn-warning" >Edit</button>
            <button type="button" class=" btn-danger">Delete</button>
            <small>3 days ago</small>
            </div>
            </a>
        </div>


// {/* <ul class="list-group">
//   <li class="list-group-item">{lolist}</li>
 
// </ul> */}
        )
    }

}