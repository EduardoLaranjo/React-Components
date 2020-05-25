
import React, {Component} from 'react';

class AsyncDropdown extends Component {

  state = [
    {key: 0, value: ''},
    {key: 1, value: 'Hey there'},
    {key: 2, value: 'Stranger'},
    {key: 3, value: 'Welcome'},
  ];

  renderList() {
    return (
      <select>
        {this.state.map(({key, value}) => <option key={key}>{value}</option>)}
      </select>
    );
  }

  render() {
    return (
      <div className={""}>
        {this.renderList()}
      </div>
    );
  }
}

export default AsyncDropdown;