var React = require("react")

var Peoples = React.createClass({
    render: function(){
		var peoples = this.props.peoples.map(function(people){
			return (<People name={people.name} key={people.id} />)
		}.bind(this))
		return(
			<div>
				{peoples}
			</div>
		)
    }
});


var People = React.createClass({
	render : function(){
		return(
		<div className='People'>
			<b>{this.props.name}</b>
		</div>
		)
	}
});

module.exports = Peoples;
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
