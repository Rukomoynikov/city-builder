var React = require('react');

var ControlButton = React.createClass({
  componentWillMount : function(){
      'use strict';
  },
  componentDidMount : function(){
      'use strict';
  },
  render: function(){
    'use strict';
    return (
      <div  className='ControlButton'>
        <button onClick={this.props.nextDay}>Следующий день</button>
      </div>
    )
  }
});

module.exports = ControlButton
