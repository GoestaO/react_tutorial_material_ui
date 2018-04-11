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
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class MyApplication extends React.Component {
  constructor(){
    super();
    this.state = {
      tableData: [],
    };
  }
  render() {
    return (
      <MuiThemeProvider>
        <AppBar className="appBar"
          title="My Application"
          onTitleClick={() => this.handleClick()}                    
        />
      <div className="container2">
        <div className="container1">
          <UserTable value={this.state.tableData}/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }


  handleClick() {
     fetch('https://randomuser.me/api/?results=10')
     .then(results => {
       return results.json();
     }).then(data => {
       this.setState({tableData: data.results});
     })
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

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    let tableData = this.props.value;
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Nr.</TableHeaderColumn>
            <TableHeaderColumn>First name</TableHeaderColumn>
            <TableHeaderColumn>Last name</TableHeaderColumn>
            <TableHeaderColumn>E-Mail</TableHeaderColumn>
            <TableHeaderColumn>Picture</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name.first}</TableRowColumn>
                <TableRowColumn>{row.name.last}</TableRowColumn>
                <TableRowColumn>{row.email}</TableRowColumn>
                <TableRowColumn><img src={row.picture.medium}/></TableRowColumn>
              </TableRow>
              ))}
        </TableBody>
      </Table>
    );
  }

}

//////////////////////////////////////////////////////////
ReactDOM.render(
  <MyApplication />,
  document.getElementById('root')
);


registerServiceWorker();
