var CityBuildings = React.createClass({
    getInitialState : function(){
        return {
            buildings : this.props.buildings,
            messages : this.props.messages
        }
    },
    render: function(){
      var buildings = this.props.buildings.map(function(element){
          return (
              <Building name={element.name} key={element.id} cost={element.cost} have={element.have} build={this.props.build} id={element.id} />
          )
      }.bind(this))
        return (
          <div className='CityBuildings'>
            <h4>Город</h4>
            <div>
                <MessagePanel messages={this.props.messages} />
            </div>
            {buildings}
          </div>
        )
    }
});
