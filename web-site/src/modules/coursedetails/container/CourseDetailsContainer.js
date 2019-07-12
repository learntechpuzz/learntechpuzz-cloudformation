import React, { Component } from 'react';
import CourseDetails from '../components/CourseDetails'

class CourseDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 4.5,
            numPages: null,
            pageNumber: 1,
        }
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    render() {
        const { pageNumber, numPages } = this.state;
        return (<CourseDetails rating={this.state.rating} pageNumber={pageNumber} numPages={numPages} onDocumentLoadSuccess={() => this.onDocumentLoadSuccess({numPages})} />);
    }

}

export default CourseDetailsContainer;
