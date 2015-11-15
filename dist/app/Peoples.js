var Peoples = React.createClass({displayName: "Peoples",
    render: function(){
    	console.log(this.props.peoples);
		var peoples = this.props.peoples.map(function(people){
			return (React.createElement(People, {name: people.name, key: people.id}))
		}.bind(this))
		return(
			React.createElement("div", null, 
				peoples
			)
		)
    }
});


var People = React.createClass({displayName: "People",
	render : function(){
		return(
		React.createElement("div", {className: "People"}, 
			React.createElement("b", null, this.props.name)
		)
		)
	}
});

/*
			<br />
			<br />
			Стоимость: {this.props.cost}
			<br />
			Требования: {this.props.cost}
			<br />
			В наличии: {this.props.have}
			<br /><br /><br />
			<button onClick={this.sendToParent}>Нанять</button>
*/
