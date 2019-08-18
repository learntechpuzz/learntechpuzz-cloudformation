import React, { Component } from 'react';
import CourseDetails from '../components/CourseDetails'
import { withRouter } from 'react-router-dom'
import axios from './../../common/axios/axios-api'
import withErrorHandler from './../../common/withErrorHandler/withErrorHandler'
import queryString from 'query-string'

class CourseDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 4.5,
            id_token: null,
            access_token: null,
            course: null,
        }
    }

    getCourseDetails() {
        const value = queryString.parse(this.props.location.search);
        const idToken = value.id_token;
        const accessToken = value.access_token;
        const courseId = value.courseId;

        this.setState({
            id_token: idToken,
            access_token: accessToken,
        });
        axios.get('/courses/' + courseId, { headers: { Authorization: idToken } })
            .then(response => {
                this.setState({ course: response.data.value })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getCourseDetails();
    }
   
    render() {
        return (<CourseDetails course={this.state.course} rating={this.state.rating}/>);
    }

}

export default withRouter(withErrorHandler(CourseDetailsContainer, axios));
