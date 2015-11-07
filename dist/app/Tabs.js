var Tab = React.createClass({displayName: "Tab",
    render : function(){
        var classActive = this.props.active ? "Tab Tab--active" : "Tab"
        return (
            React.createElement("span", {className: classActive, onClick: this.enableTab}, 
                this.props.name
            )
        )
    },
    enableTab : function(){
        this.props.enableTab(this.props.id)
    }
})

var Tabs = React.createClass({displayName: "Tabs",
    render : function(){
        var tabs = this.props.tabs.map(function(tab){
            return (React.createElement(Tab, {name: tab.name, active: tab.active, key: tab.id, enableTab: this.props.enableTab, id: tab.id}))
        }.bind(this))
        return (
            React.createElement("div", null, 
                tabs
            )
        )
    }
})
