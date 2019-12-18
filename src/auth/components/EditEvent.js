import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { updateEvent } from '../api';
import { withRouter } from 'react-router-dom'
class EditEvent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.event.id,
            eventName: props.event.eventName,
            description: props.event.description,
            when: props.event.when
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { user, id, history } = this.props;
        updateEvent(this.state, user)
            .then((res) => {
                history.push("/listEvent")
            })
            .catch((error) => {
                console.log("-_-_-_-_: ", error)
            })
    }

    render() {
        const { eventName, description, when } = this.state;
        return (

            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name Event</Form.Label>
                        <Form.Control name="eventName" type="text" value={eventName} onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Discription</Form.Label>
                        <Form.Control name="description" type="text" value={description} onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>When</Form.Label>
                        <Form.Control name="when" type="date/time" value={when} onChange={this.onChange} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        OK
        </Button>
                </Form>
            </div>


        )
    }
}
export default withRouter(EditEvent);