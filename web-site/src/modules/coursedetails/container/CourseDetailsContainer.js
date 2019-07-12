import React, { Component } from 'react';
import CourseDetails from '../components/CourseDetails'

class CourseDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 4.5,
        }
    }
    render() {
        return (<CourseDetails rating={this.state.rating}/>);
    }

}

export default CourseDetailsContainer;
