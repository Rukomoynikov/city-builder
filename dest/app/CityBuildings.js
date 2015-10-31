var CityBuildings = React.createClass({displayName: "CityBuildings",
    getInitialState : function(){
        return {
            buildings : this.props.buildings
        }
    },
    render: function(){
      var buildings = this.props.buildings.map(function(element){
          return (
              React.createElement(Building, {name: element.name, key: element.id, cost: element.cost, have: element.have, build: this.props.build, id: element.id})
          )
      }.bind(this))
        return (    
          React.createElement("div", {className: "CityBuildings"}, 
            React.createElement("h4", null, "Город"), 
            buildings
          )
        )
    }
});
