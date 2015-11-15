var React = require('react');

var Tab = React.createClass({
    render : function(){
        var classActive = this.props.active ? "Tab Tab--active" : "Tab"
        return (
            <span className={classActive} onClick={this.enableTab}>
                {this.props.name}
            </span>
        )
    },
    enableTab : function(){
        this.props.enableTab(this.props.id)
    }
})

var Tabs = React.createClass({
    render : function(){
        var tabs = this.props.tabs.map(function(tab){
            return (<Tab name={tab.name} active={tab.active} key={tab.id} enableTab={this.props.enableTab} id={tab.id} />)
        }.bind(this))
        return (
            <div>
                {tabs}
            </div>
        )
    }
})

module.exports = Tabs
