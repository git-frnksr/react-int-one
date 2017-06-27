"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
    getInitialState: () => {
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },
    setAuthorState: (event) => {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    render(){
        return(
            <AuthorForm author={this.state.author} 
                        onChange={this.setAuthorState} />
        );
    }
});

module.exports = ManageAuthorPage;