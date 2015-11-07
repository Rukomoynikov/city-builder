var Peoples = React.createClass({
	var peoples = this.props.peoples.map(function(people){
		return (<People name={people.name} />)
	})
    render: function(){
		return(
			{peoples}
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