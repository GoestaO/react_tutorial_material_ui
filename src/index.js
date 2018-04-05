import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class MyAppBar extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title="My Application"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTitleClick={() => this.handleClick()}
        />
      </MuiThemeProvider>
    );
  }



  handleClick() {
    alert('onClick triggered on the title component');
  }

  const

}



















//////////////////////////////////////////////////////////
ReactDOM.render(
  <MyAppBar />,
  document.getElementById('root')
);
registerServiceWorker();
