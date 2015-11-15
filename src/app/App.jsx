Parse.initialize("OhVWSWcLTb3KrSdHFXKbDawVCKVLyeE63tEusAdQ", "fgfPJ0vlpewRJp0TXEUKpYC2aYkILjNFfd1QbbHO");

// Vendor Libs
var Lockr = require("lockr")
var React = require('react');
var ReactDOM = require('react-dom');

// Components
var Tabs = require('./Tabs.jsx');
var CityBuildings = require('./CityBuildings.jsx');
var ControlPanel = require('./ControlPanel.jsx');
var Peoples = require('./Peoples.jsx');
var PeoplesControlPanel = require('./PeoplesControlPanel.jsx');

var App = React.createClass({
  getInitialState : function(){
      return {
          population: Lockr.get('population') || 1000,
          food: Lockr.get('food') || 1000, // 10% от популяции в день
          gold : Lockr.get('gold') || 1000, // Один человек приносит 1 золото в день, но каждый человек требует 1 еду в день
          buildings : Lockr.get('buildings') || buildings,
          year : Lockr.get('year') || 2015,
          hunger : Lockr.get('hunger') || false,
          placeless : Lockr.get('placeless') || false,
          messages : Lockr.get('messages') || [],
          tabs : tabs,
          peoples : peoples
      }
  },
  render: function(){
    return (
      <div>
        <Tabs tabs={this.state.tabs} enableTab={this.enableTab} />
        <CityBuildings buildings={this.state.buildings} build={this.build} messages={this.state.messages} active={true} />
        <ControlPanel population={this.state.population} food={this.state.food} gold={this.state.gold} nextDay={this.nextDay} active={true} />
        <Peoples active={false} peoples={this.state.peoples} />
        <PeoplesControlPanel active={false} />
        <hr />
        <button onClick={this.startNewGame}>Начать новую игру</button>
      </div>
    )
  },
  nextDay : function(){
      Lockr.set("food", this.state.food - this.state.population + (this.state.buildings[1].have * 1000) );
      var hunger = (this.state.food <= 0);
      var placeless = (this.state.buildings[0].have < Math.round(this.state.population / 1000));
      var populationAdding = (function(){
        if (hunger || placeless) {
            return 0
        } else {
            return parseInt(this.state.population / 10);
        }
      }.bind(this))()

      this.addOrRemoveMessage(hunger ?  "add" : "remove", messages[0]);
      this.addOrRemoveMessage(placeless ? "add" : "remove", messages[1]);

      Lockr.set("population", this.state.population + populationAdding);
      Lockr.set("gold", this.state.gold + this.state.population);
      this.setState({
          population : this.state.population + populationAdding,
          gold : this.state.gold + this.state.population,
          food : this.state.food - this.state.population + (this.state.buildings[1].have * 1000)
      })
  },
  addOrRemoveMessage : function(action, message){
      if (action === "add") {
          if (!this.state.messages.some(function(elem){return elem.id === message.id})) {
              this.state.messages.push(message)
          }
      } else {
          this.state.messages.pop(message)
      }

      Lockr.set("messages", this.state.messages)
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

      this.setState({
          buildings : filteredBuildings
      })

      Lockr.set("buildings", this.state.buildings);
  },
  startNewGame : function(){
      Lockr.rm("population");
      Lockr.rm("gold");
      Lockr.rm("food");
      Lockr.rm("buildings");

      this.setState({
          population: 1000,
          food: 1000,
          gold : 1000,
          buildings: buildings,
          messages : []
      })
  },
  enableTab : function(id){

  }
});

ReactDOM.render(<App />, document.querySelector('#app'))
