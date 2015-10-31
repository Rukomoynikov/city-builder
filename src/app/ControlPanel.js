var ControlPanel = React.createClass({
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
      <div  className='ControlPanel'>
        <h4>Совет управления городом</h4>
        <Control title="Население города" value={this.props.population} />
        {/*<Control title="Прирост населения" /> */}
        <Control title="Золото" value={this.props.gold} />
        <Control title="Еда" value={this.props.food} />
        <ControlButton value='Следующий день' nextDay={this.props.nextDay} />
      </div>
    )
  }
});
