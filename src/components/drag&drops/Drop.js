import React, {Component} from 'react';
import './Drop.css';

class Drop extends Component {

  handlerDrag(event) {
    event.preventDefault();
    event.dataTransfer.effectAllowed = 'copy';
    const formData = new FormData();

    for (let file of event.dataTransfer.files) {
      formData.append('image', file);
    }

    fetch('http://localhost:8080', {body: formData, method: 'POST'})
      .then(value => console.log(value));

  }

  render() {

    return (
      <form>
        <div onDrop={this.handlerDrag}
             onDragOver={event => event.preventDefault()}
             className={'container'}>
          <span>Drop files here to upload</span>
        </div>
      </form>
    );
  }
}

export default Drop;