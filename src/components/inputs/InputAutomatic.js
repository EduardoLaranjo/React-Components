import React, {Component} from 'react';
import cities from './cities';

const MIN_CHARS_START_SEARCH = 3;

class InputAutomatic extends Component {

  state = {value: ''};

  render() {
    return (
      <div>
        <label htmlFor='automatic-input'>My Input: </label>
        <input id='automatic-input'
               list='cities'
               value={this.state.value}
               onChange={event => (this.setState(
                 {value: event.target.value}))}/>

        {/* render auto complete list */}
        {this.renderCities()}

      </div>
    );
  }

  renderCities() {
    const {value} = this.state;

    if (value.length < MIN_CHARS_START_SEARCH) {
      return;
    }

    const citiesFilterByValue = cities.filter(city => city.includes(value));

    return (
      <datalist id="cities">
        {citiesFilterByValue.map(value => (
          <option key={value}>{value}</option>)
        )}
      </datalist>
    );

  }
}

export default InputAutomatic;
