var Message = React.createClass({displayName: "Message",
    getInitialState: function(){
        return {
            messages : this.props.messages
        }
    },
  render: function(){
    'use strict';
    return (
      React.createElement("div", {className: 'Message--' + this.props.mood}, 
        this.props.value
      )
    )
  }
});
