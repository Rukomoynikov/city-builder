Parse.initialize("OhVWSWcLTb3KrSdHFXKbDawVCKVLyeE63tEusAdQ", "fgfPJ0vlpewRJp0TXEUKpYC2aYkILjNFfd1QbbHO");

var buildings = [
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
    },
    {
        id : 3,
        name : "Таверна",
        cost : 1000,
        have : 0
    },
    {
        id : 4,
        name : "Космопорт",
        cost : 1000,
        have : 0
    },
    {
        id : 5,
        name : "Библиотека",
        cost : 1000,
        have : 0
    },
]

var messages = [
    {
        id : "hunger",
        text : "Жители города голодают, прирост населения остановлен и количество людей уменьшается на 10% каждый год. Постройте фермы.",
        mood : "bad"
    },
    {
        id : "placeless",
        text : "Новым жителям негде жить, прирост населения остановлен. Постройте больше новых домов.",
        mood : "bad"
    },
    {
        id : "letterfromfuture",
        text : "Ваш город посетили гости из будущего и увеличли прирост населения на 1%. Как им это удалось?",
        mood : "good"
    }
]

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
          messages : []
      }
  },
  render: function(){
    return (
      <div>
        <CityBuildings buildings={this.state.buildings} build={this.build} messages={this.state.messages} />
        <ControlPanel population={this.state.population} food={this.state.food} gold={this.state.gold} nextDay={this.nextDay} />
        <hr />
        <button onClick={this.startNewGame}>Начать новую игру</button>
      </div>
    )
  },
  nextDay : function(){
      Lockr.set("food", this.state.food - this.state.population + (this.state.buildings[1].have * 1000) );
      if (this.state.food <= 0){
          this.state.messages.push(messages[0]);
          this.setState({
              messages : this.state.messages
          })
      }
      if (this.state.buildings[0].have < Math.round(this.state.population / 1000) ) {
          this.state.messages.push(messages[1]);
          this.setState({
              messages : this.state.messages
          })
      }
      Lockr.set("population", this.state.population + 100);
      Lockr.set("gold", this.state.gold + this.state.population);
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
          buildings: buildings
      })
  }
});

ReactDOM.render(<App />, document.querySelector('#app'))
