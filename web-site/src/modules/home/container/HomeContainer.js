import React, { Component } from 'react';
import Courses from './../components/Courses'
import axios from './../../common/axios/axios-api'
import withErrorHandler from './../../common/withErrorHandler/withErrorHandler'
import queryString from 'query-string'

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: [],
            id_token: null,
            access_token: null,
            courses: [],
        }
    }

    getTokens() {
        const value = queryString.parse(this.props.location.search);
        console.log(value);
        const idToken = value.id_token;
        console.log(idToken);
        const accessToken = value.access_token;
        this.setState({
            id_token: idToken,
            access_token: accessToken,
        });
        axios.get('/courses', { headers: { Authorization: idToken } })
        .then(response => {
            this.setState({ courses: response.data })
        })
        .catch(err => console.log(err))
      
    }

    componentDidMount() {
        this.getTokens();
    }

    enrollHandler = (id) => {
        let loadingNew = this.state.loading.slice();
        loadingNew.push(id)
        this.setState({
            loading: loadingNew
        }
        );

        this.props.history.push('/course-details?id_token=' + this.state.id_token + '&access_token=' + this.state.access_token);
    }
    render() {
        return (
            <Courses courses={this.state.courses} enrollHandler={(id) => this.enrollHandler(id)} loading={this.state.loading} />
        );
    }
}

export default withErrorHandler(HomeContainer, axios);