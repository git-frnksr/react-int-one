"use strict";

var React = require('react');

var About = React.createClass({
    statics:{
        willTransitionTo: (transition, params, query, cb) => {
            if(!confirm('Are you sure you want to read a page that\'s this boring?')){
                transition.abort();
            }
            else {
                cb();
            }
        },
        willTransitionFrom: (transition, component) => {
            if(!confirm('Are you sure you want to leave a page that\'s this exciting?')){
                transition.abort();
            }
        }
    },
    render(){
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;