var ControlPanel = React.createClass({displayName: "ControlPanel",
    getInitialState: function(){
            return {
                population : this.props.population,
                gold : this.props.gold,
                food : this.props.gold
            }
    },
  render: function(){
    'use strict';
    return (
      React.createElement("div", {className: "ControlPanel"}, 
        React.createElement("h4", null, "Совет управления городом"), 
        React.createElement(Control, {title: "Население города", value: this.props.population}), 
        /*<Control title="Прирост населения" /> */
        React.createElement(Control, {title: "Золото", value: this.props.gold}), 
        React.createElement(Control, {title: "Еда", value: this.props.food}), 
        React.createElement(ControlButton, {value: "Следующий день", nextDay: this.props.nextDay})
      )
    )
  }
});
