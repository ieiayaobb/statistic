/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var AppBar = mui.AppBar
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

var socket = require('./socket/socket.jsx');

var Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render: function() {

    var containerStyle = {
      textAlign: 'center',
    };

    return (

      <div style={containerStyle}>
        <socket/>
        <AppBar title='Statistic' iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.leftClick}/>
        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

      </div>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = Main;
