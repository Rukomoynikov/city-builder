var React = require('react');

var Control = React.createClass({
  getInitialState : function(){
      return {
          title : this.props.title,
          value : this.props.value
      }
  },
  render: function(){
    return (
      <div className='Control'>
        {this.state.title} : {this.props.value}
      </div>
    )
  }
});

module.exports = Control
