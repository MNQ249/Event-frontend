import React from "react";
// import ReactDOM from "react-dom";
// import { HashRouter } from 'react-router-dom';
import axios from "axios";
// import DatePicker from 'react-datepicker';
import {Form, Button} from 'react-bootstrap';
import { createEvent } from "../api";
// import ListEvent from "./listEvent";


export default class CreateEvent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
        listEvent:[],
      
          eventName:'',
          discription:'',
          when:''
      
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }



    onChange(e){
        this.setState({
          [e.target.name]: e.target.value
        });
    }


    // addEvent = (e) => {

    //   console.log('add Event');
    //   this.setState({
    //     listEvent: [...this.state.listEvent, this.state.newEvent],
    //     newEvent: '',
    //   });
    // }




//     onChangeEventName(e){
//         console.log('eventName');
//         this.setState({eventName: e.target.value});
//     }


//     onChangeDiscription(e){
//         console.log("discription");
//         this.setState({discription:e.target.value});
//     }

//    onChangeWhen(e){
//        console.log('pick time');
//        this.setState({when:e.target.value});

//    }

   onSubmit(e){
     e.preventDefault();

            createEvent(this.props.user, this.state).then((res) => console.log(res)
            )
    }

   
    render(){
        console.log(this.state);
        return(

    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name Event</Form.Label>
          <Form.Control name= "eventName" type="text" value={this.state.eventName} onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Discription</Form.Label>
          <Form.Control name="discription" type="text" value={this.state.discription} onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>When</Form.Label>
          <Form.Control name="when" type="date/time" value={this.state.when} onChange={this.onChange} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create New EVENtOS
        </Button>
      </Form>
    </div>
    
        )
    }
}
