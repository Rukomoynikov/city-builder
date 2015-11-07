var Peoples = React.createClass({displayName: "Peoples",
    render: function(){
		return(
		React.createElement("div", {className: "People"}, 
			React.createElement("b", null, this.props.name), 
			React.createElement("br", null), 
			React.createElement("br", null), 
			"Стоимость: ", this.props.cost, 
			React.createElement("br", null), 
			"Требования: ", this.props.cost, 
			React.createElement("br", null), 
			"В наличии: ", this.props.have, 
			React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), 
			React.createElement("button", {onClick: this.sendToParent}, "Нанять")
		)
		)
    }
});
