var MessagePanel = React.createClass({displayName: "MessagePanel",
    getInitialState: function(){
        return {
            messages : this.props.messages
        }
    },
  render: function(){
    var messages = this.props.messages.map(function(element){
        return (
            React.createElement(Message, {value: element.text, key: element.id, mood: element.mood})
        )
    }.bind(this))
    'use strict';
    return (
      React.createElement("div", {className: "MessagePanel"}, 
        React.createElement("ul", null, 
            messages
        )
      )
    )
  }
});
