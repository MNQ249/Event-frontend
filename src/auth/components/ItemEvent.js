import React from 'react';
import { withRouter } from 'react-router-dom';

class ItemEvent extends React.Component {

    deleteItem = (e) => {
        e.preventDefault();
        this.props.delete(this.props.id, this.props.user);

    }
    updateItem = (e) => {
        const { history, setCurrentEvent, id, when, description, eventName } = this.props;
        e.preventDefault();
        const event = {
            eventName: eventName,
            id: id,
            when: when,
            description: description
        }
        setCurrentEvent(event)
            .then( () => {
                history.push("/editEvent/")
            });
    }

    render() {

        return (
            <div className="itemEvent">
                <h2>{this.props.eventName}</h2>
                <sub>{this.props.when}</sub>
                <p>
                    {this.props.description}
                </p>
                <a href="#" className="btn btn-danger" onClick={this.deleteItem}>Delete</a>
                <a herf="#" className="btn btn-warning" onClick={this.updateItem}>Update</a>
            </div>
        );
    }
}


export default withRouter(ItemEvent);