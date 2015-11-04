Parse.initialize("OhVWSWcLTb3KrSdHFXKbDawVCKVLyeE63tEusAdQ", "fgfPJ0vlpewRJp0TXEUKpYC2aYkILjNFfd1QbbHO");

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
          tabs : tabs
      }
  },
  render: function(){
    return (
      <div>
        <Tabs tabs={this.state.tabs} />
        <CityBuildings buildings={this.state.buildings} build={this.build} messages={this.state.messages}/>
        <ControlPanel population={this.state.population} food={this.state.food} gold={this.state.gold} nextDay={this.nextDay} />
        <hr />
        <button onClick={this.startNewGame}>Начать новую игру</button>
      </div>
    )
  },
  nextDay : function(){
      Lockr.set("food", this.state.food - this.state.population + (this.state.buildings[1].have * 1000) );
      var hunger;
      var placeless;
      if (this.state.food <= 0){
          this.addOrRemoveMessage("add", messages[0]);
      } else {
          this.addOrRemoveMessage("remove", messages[0]);
      }
      if (this.state.buildings[0].have < Math.round(this.state.population / 1000) ) {
          this.addOrRemoveMessage("add", messages[1]);
      } else {
          this.addOrRemoveMessage("remove", messages[1]);
      }
      Lockr.set("population", this.state.population + 100);
      Lockr.set("gold", this.state.gold + this.state.population);
      this.setState({
          population : this.state.population + parseInt(this.state.population / 10),
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
  }
});

ReactDOM.render(<App />, document.querySelector('#app'))