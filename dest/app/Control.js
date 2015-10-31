var Control = React.createClass({displayName: "Control",
  getInitialState : function(){
      return {
          title : this.props.title,
          value : this.props.value
      }
  },
  render: function(){
    return (
      React.createElement("div", {className: "Control"}, 
        this.state.title, " : ", this.props.value
      )
    )
  }
});
