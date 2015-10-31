var App = React.createClass({displayName: "App",
  getInitialState : function(){
      return {
          population: Lockr.get('population') || 1000,
          food: Lockr.get('food') || 1000, // 10% от популяции в день
          gold : Lockr.get('gold') || 1000, // Один человек приносит 1 золото в день, но каждый человек требует 1 еду в день
          buildings : [
              {
                  id : 1,
                  name : "Дом",
                  cost : 1000,
                  have : 0
              },
              {
                  id : 2,
                  name : "Ферма",
                  cost : 1000,
                  have : 0
              }
          ]
      }
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(CityBuildings, {buildings: this.state.buildings, build: this.build}), 
        React.createElement(ControlPanel, {population: this.state.population, food: this.state.food, gold: this.state.gold, nextDay: this.nextDay}), 
        React.createElement("hr", null), 
        React.createElement("button", {onClick: this.startNewGame}, "Начать новую игру")
      )
    )
  },
  nextDay : function(){
      Lockr.set("population", this.state.population + 100);
      Lockr.set("gold", this.state.gold + this.state.population);
      Lockr.set("food", this.state.food - this.state.population + (this.state.buildings[1].have * 1000) );
      this.setState({
          population : this.state.population + parseInt(this.state.population / 10),
          gold : this.state.gold + this.state.population,
          food : this.state.food - this.state.population + (this.state.buildings[1].have * 1000)
      })
  },
  build : function(idOfBuilding){
      var filteredBuildings = this.state.buildings.map(function(element){
          if(element.id === idOfBuilding && element.cost <= this.state.gold){
              element.have ++;
              this.setState({
                  gold : this.state.gold - element.cost
              })
          }
          return element
      }.bind(this))

      console.log(filteredBuildings);
  },
  startNewGame : function(){
      Lockr.rm("population");
      Lockr.rm("gold");
      Lockr.rm("food");
      this.setState({
          population: 1000,
          food: 1000,
          gold : 1000,
      })
  }
});

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'))
