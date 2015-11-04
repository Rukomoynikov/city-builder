var Tab = React.createClass({
    render : function(){
        var classActive = this.props.active ? "Tab Tab--active" : "Tab"
        return (
            <span className={classActive}>
                {this.props.name}
            </span>
        )
    }
})

var Tabs = React.createClass({
    render : function(){
        var tabs = this.props.tabs.map(function(tab){
            return (<Tab name={tab.name} active={tab.active} key={tab.id} />)
        })
        return (
            <div>
                {tabs}
            </div>
        )
    }
})
