var Tab = React.createClass({displayName: "Tab",
    render : function(){
        var classActive = this.props.active ? "Tab Tab--active" : "Tab"
        return (
            React.createElement("span", {className: classActive}, 
                this.props.name
            )
        )
    }
})

var Tabs = React.createClass({displayName: "Tabs",
    render : function(){
        var tabs = this.props.tabs.map(function(tab){
            return (React.createElement(Tab, {name: tab.name, active: tab.active, key: tab.id}))
        })
        return (
            React.createElement("div", null, 
                tabs
            )
        )
    }
})
