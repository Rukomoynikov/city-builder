var Building = React.createClass({displayName: "Building",
    build : function(){

    },
  render: function(){
    return (
      React.createElement("div", {className: "Building"}, 
        React.createElement("b", null, this.props.name), 
        React.createElement("br", null), 
        React.createElement("br", null), 
        "Стоимость: ", this.props.cost, 
        React.createElement("br", null), 
        "В наличии: ", this.props.have, 
        React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), 
        React.createElement("button", {onClick: this.sendToParent}, "Построить"), 
        React.createElement("input", {type: "text"})
      )
    )
},
    sendToParent : function(){
        this.props.build(this.props.id)
    }
});
