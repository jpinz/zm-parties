import React, {Component} from 'react'
import { addMaleGuest } from '../../helpers/db'
import { db } from '../../config/constants'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Parties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };

    }

    openEvent(id) {
        console.log(id);
        addMaleGuest("Sample Guy", id);
    }

    componentDidMount() {
        const eventsRef = db.ref('events').orderByChild('date');
        eventsRef.on('value', (snapshot) => {
            let events = snapshot.val();
            let newState = [];
            for (let event in events) {
                newState.push({
                    id: event,
                    name: events[event].name,
                    date: events[event].date,
                    type: events[event].type
                });
            }
            this.setState({
                events: newState
            });
        });
    }
    render () {
        console.log(this.state);
        return (
            <div>

                <h1>List of parties here</h1>
                <ListGroup>
                    {this.state.events.map((event) => {
                        return (
                            <Link to={'/parties/' + event.id}><ListGroupItem key={event.id} header={event.name} onClick={(e) => this.openEvent(event.id, e)}>{event.date}</ListGroupItem></Link>
                        )
                    })}
                </ListGroup>
                <Link to="/createEvent" >Add Party</Link>
            </div>
        )
    }
}