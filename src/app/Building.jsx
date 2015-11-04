var Building = React.createClass({
    build : function(){

    },
  render: function(){
    return (
      <div className='Building'>
        <b>{this.props.name}</b>
        <br />
        <br />
        Стоимость: {this.props.cost}
        <br />
        В наличии: {this.props.have}
        <br /><br /><br />
        <button onClick={this.sendToParent}>Построить</button>
        <input type='text' />
      </div>
    )
},
    sendToParent : function(){
        this.props.build(this.props.id)
    }
});
