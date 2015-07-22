/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let AppBar = mui.AppBar;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Switcher = require('./socket/switcher');
let ChartPanel = require('./charts/ChartPanel')

class Main {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  render() {

    var containerStyle = {
      textAlign: 'center',
    };

    return (

      <div style={containerStyle}>
        <Switcher/>
        <AppBar title='Statistic' iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.leftClick}/>
        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
        <ChartPanel />
      </div>
    );
  }

  _handleTouchTap() {
    alert('1-2-3-4-5');
  }

}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
}


module.exports = Main;
