import React from 'react';
import {Carousel } from 'react-bootstrap';

export default class Home extends React.Component{
constructor(props){
  super(props);

  this.state = {
    index: 0,
    direction: null
  }
}
setIndex = index => this.setState({index});
setDirection = direction => this.setState({direction});

  
  
   handleSelect = (selectedIndex, e) => {
      this.setIndex(selectedIndex);
      this.setDirection(e.direction);

    }
  
  render() {
    const { index, direction } = this.state;
    return(
      <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Celebrations</h3>
            <p>Celebration will start in Thursday.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://saudigazette.com.sa/uploads/images/2019/11/24/1429339.jpg"
            alt="four slide"
          />
          <Carousel.Caption>
            <h3>Sporting</h3>
            <p>Booking your favorite team.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1566413358759-0b36d585f04a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>ِConferences and Seminars</h3>
            <p>There are lots of different types of academic event that you might want to attend.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Art</h3>
            <p>
            Start your ambition with drawing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
}