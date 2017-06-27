var React = require('react');
var routes = require('./routes');
var Router = require('react-router');
$ = jQuery = require('jquery');

// Routing code
Router.run(routes, (Handler) => {
    React.render(<Handler />, document.getElementById('app'));
});