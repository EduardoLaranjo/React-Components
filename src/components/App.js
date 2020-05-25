import React, {Component} from 'react';
import Dropdown from './dropdowns/Dropdown';
import {BrowserRouter, Route} from 'react-router-dom';
import Button from './buttons/Button';
import InputAutomatic from './inputs/InputAutomatic';
import Sidebar from './Sidebar';
import DropClick from './drag&drops/DropClick';

class App extends Component {

  render() {
    return (
      <div style={{display: 'flex'}}>
        <BrowserRouter>
          <Sidebar/>
          <Route exact path={'/dropdown'}>
            <Dropdown/>
          </Route>
          <Route exact path={'/button'}>
            <Button/>
          </Route>
          <Route exact path={'/drop'}>
            <DropClick/>
          </Route>
          <Route exact path={'/input'}>
            <InputAutomatic/>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;