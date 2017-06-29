"use strict";

var React = require('react');
var TextInput = require('../common/TextInput');

var AuthorForm = React.createClass({
    render(){
        return(
            <form>
                <h1>Manage Author</h1>

                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange} />

                <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange} />
                
                <input type="submit" value="Save" className="btn btn-default" />
            </form>
        );
    }
});

module.exports = AuthorForm;