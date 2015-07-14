/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import mui from 'material-ui';

class Main{
  constructor() {
    this.RaisedButton = mui.RaisedButton;
    this.Dialog = mui.Dialog
    this.ThemeManager = new mui.Styles.ThemeManager();
    this.Colors = mui.Styles.Colors;
  }

  childContextTypes() {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: this.ThemeManager.getCurrentTheme()
    };
  };

  componentWillMount() {
    this.ThemeManager.setPalette({
      accent1Color: this.Colors.deepOrange500
    });
  };

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px'
    };

    let standardActions = [
      { text: 'Okay' }
    ];

    return (
        <div style={containerStyle}>
          <Dialog
              title="Super Secret Password"
              actions={standardActions}
              ref="superSecretPasswordDialog">
            1-2-3-4-5
          </Dialog>

          <h1>material-ui</h1>
          <h2>example project</h2>

          <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

        </div>
    );
  }

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

};

export default Main;