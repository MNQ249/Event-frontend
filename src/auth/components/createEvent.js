import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import axios from "axios";
import DatePicker from 'react-datepicker';


export default class CreateEvent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
        // orgnizer:'',
        eventName:'',
        discription:'',
        when:''
        }
    }

    onChangeEventName(e){
        console.log('eventName');
        this.setState({eventName: e.target.value});
    }


    onChangeDiscription(e){
        console.log("discription");
        this.setState({discription:e.target.value});
    }

   onChangeWhen(e){
       console.log('pick time');
       this.setState({when:e.target.value});

   }

   onSubmit(e){
       e.preventDefault()

       fetch('http://localhost:7165/api/events/createEvent')
       .then(res=> console.log(res.data));

       this.setState({
        // orgnizer:'',
        eventName:'',
        discription:'',
        when:() => {
            const [startDate, setStartDate] = React.useState(
              setHours(setMinutes(new Date(), 30), 16)
            );
            return (
            //   <DatePicker
            //     selected={startDate}
            //     onChange={date => setStartDate(date)}
            //     maxDate={addDays(new Date(), 5)}
            //     showTimeSelect
            //     excludeTimes={[
            //       setHours(setMinutes(new Date(), 0), 17),
            //       setHours(setMinutes(new Date(), 30), 18),
            //       setHours(setMinutes(new Date(), 30), 19),
            //       setHours(setMinutes(new Date(), 30), 17)
            //     ]}
            //     dateFormat="MMMM d, yyyy h:mm aa"
            //   />
            <h1>time</h1>
            );
          }
       })
   }
    render(){
        return(

    // <div className="form-wrapper">
    //   <Form onSubmit={this.onSubmit}>
    //     <Form.Group controlId="Name">
    //       <Form.Label>Name Event</Form.Label>
    //       <Form.Control type="text" value={this.state.eventName} onChange={this.onChangeEventName} />
    //     </Form.Group>

    //     <Form.Group controlId="Name">
    //       <Form.Label>Discription</Form.Label>
    //       <Form.Control type="text" value={this.state.discription} onChange={this.onChangeDiscription} />
    //     </Form.Group>

    //     <Form.Group controlId="Name">
    //       <Form.Label>When</Form.Label>
    //       <Form.Control type="date/time" value={this.state.when} onChange={this.onChangeWhen} />
    //     </Form.Group>

    //     <Button variant="danger" size="lg" block="block" type="submit">
    //       Create New EVENtOS
    //     </Button>
    //   </Form>
    // </div>
    <h1>work</h1>
        )
    }
}