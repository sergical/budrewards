var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker,
    LeftNav,
    MenuItem,
    Toolbar,
    ToolbarGroup,
    IconButton,
    AutoComplete,
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

var toolbarStyle = {
  backgroundColor: '#901D19',
  color: '#fff'
}

var fontAwesome = {
  color: '#fff',
  fontSize: '20px',
  paddingTop: '7px'
}

var autoComplete = {
  color: '#fff'
}

FriendBar = React.createClass({
	childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  getInitialState() {
    return {
      dataSource: ["Aram", "Heather", "Jade", "Sergiy", "Jeff", "Daniel"]
    };
  },
  handleToggle() {
  	this.setState({open: !this.state.open});
  },
  goDashboard() {
    FlowRouter.go('dashboard');
  },
	render() {
		return (
			<Toolbar style={toolbarStyle}>
        <ToolbarGroup firstChild={true} float="left">
          <IconButton onTouchTap={this.goDashboard} iconClassName="fa fa-chevron-left" iconStyle={fontAwesome}/>
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <AutoComplete
            hintText="Search Buds"
            dataSource={this.state.dataSource}
            className="search-bar"
            style={autoComplete}
          />
        </ToolbarGroup>
      </Toolbar>
		)
	}
});