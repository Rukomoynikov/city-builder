var React = require('react');

var MessagePanel = React.createClass({
    getInitialState: function(){
        return {
            messages : this.props.messages
        }
    },
  render: function(){
    var messages = this.props.messages.map(function(element){
        return (
            <Message value={element.text} key={element.id} mood={element.mood}/>
        )
    }.bind(this))
    'use strict';
    return (
      <div  className='MessagePanel'>
        <ul>
            {messages}
        </ul>
      </div>
    )
  }
});

module.exports = MessagePanel
