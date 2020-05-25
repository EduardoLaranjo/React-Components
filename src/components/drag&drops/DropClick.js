import React, {Component} from 'react';
import './Drop.css';

class DropClick extends Component {

  constructor(props, context) {
    super(props, context);
    this.inputElement = React.createRef();
    this.state = {files: null};
  }

  handleDrop = event => {
    event.preventDefault();
    event.dataTransfer.effectAllowed = 'copy';
    this.setState({files: event.dataTransfer.files}, this.uploadFile)
  };

  handleClickInput = event => this.setState({files: event.target.files}, this.uploadFile);

  uploadFile = () => {
    const [file] = this.state.files;

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8080', {body: formData, method: 'POST'})
      .then(value => console.log(value));
  };

  render() {
    return (
      <form onSubmit={event => event.preventDefault()}>

        <div className={'container'}
             onDrop={this.handleDrop}
             onDragOver={event => event.preventDefault()}>

          <input type="file"
                 ref={this.inputElement}
                 style={{display: 'none'}}
                 onChange={this.handleClickInput}/>

          <button onClick={() => this.inputElement.current.click()}>
            <span>Drop or click to upload</span>
          </button>

        </div>
      </form>
    );
  }
}

export default DropClick;