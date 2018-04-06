import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class MyAppBar extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar className="appBar"
          title="My Application"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTitleClick={() => this.handleClick()}
          iconElementLeft={<CustomMenu/>}
          iconElementRight={<FlatButton label="Save" />}
        />
      </MuiThemeProvider>
    );
  }



  handleClick() {
    alert('onClick triggered on the title component');
  }

}




class CustomMenu extends React.Component {
  render () {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
  );
  }
}



















//////////////////////////////////////////////////////////
ReactDOM.render(
  <MyAppBar />,
  document.getElementById('root')
);
registerServiceWorker();
