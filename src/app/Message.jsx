var React = require('react');

var Message = React.createClass({
    getInitialState: function(){
        return {
            messages : this.props.messages
        }
    },
  render: function(){
    'use strict';
    return (
      <div className={'Message--' + this.props.mood}>
        {this.props.value}
      </div>
    )
  }
});

module.exports = Message
