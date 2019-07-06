import React, { Component } from 'react';
import Courses from './../components/Courses'
import axios from './../../common/axios/axios-api'
import withErrorHandler from './../../common/withErrorHandler/withErrorHandler'
import queryString from 'query-string'

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            loading: [],
            id_token: null
        }
    }

    getIdToken(){
        const value=queryString.parse(this.props.location.search);
        const token=value.id_token;
        this.setState({
            id_token: token
        });
    }

    componentDidMount(){
        this.getIdToken();
      }

    enrollHandler = (id) => {
        let loadingNew = this.state.loading.slice();
        loadingNew.push(id)
        this.setState({
            loading: loadingNew
        }
        );


        const options = {
            headers: {
                'Authorization': this.state.id_token,
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        var postData = {
            username: 'test1',
            name: 'test1',
            email: 'test1@mail.com',
            mobile: '1'
        }
        axios.post('/user', postData, options)
            .then(response => {
                let loadingNew = this.state.loading;
                this.setState({
                    loading: loadingNew.filter(item => item !== id)
                });
                console.log(response);

            })
            .catch(error => {
                let loadingNew = this.state.loading;
                this.setState({
                    loading: loadingNew.filter(item => item !== id)
                });
                console.log(error);
            });
    }
    render() {
        return (
            <Courses enrollHandler={(id) => this.enrollHandler(id)} loading={this.state.loading} />
        );
    }
}

export default withErrorHandler(HomeContainer, axios);