"use strict";

var React = require('react');

var Input = React.createClass({
    render(){
        return(
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>this.props.label</label>
                <div className="field">
                    <input type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        ref={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange} />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = Input;