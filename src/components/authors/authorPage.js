"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorList = require('./authorList');
var authorApi = require('../../api/authorApi');

var AuthorPage = React.createClass({
    getInitialState: function(){
        return {
            authors: []
        };
    },  
    componentDidMount: function(){
       if(this.isMounted()){
        this.setState({ authors: authorApi.getAllAuthors() });
       } 
    },
    render(){
        return(
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;