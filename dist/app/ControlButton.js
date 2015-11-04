var ControlButton = React.createClass({displayName: "ControlButton",
  componentWillMount : function(){
      'use strict';
  },
  componentDidMount : function(){
      'use strict';
  },
  render: function(){
    'use strict';
    return (
      React.createElement("div", {className: "ControlButton"}, 
        React.createElement("button", {onClick: this.props.nextDay}, "Следующий день")
      )
    )
  }
});
