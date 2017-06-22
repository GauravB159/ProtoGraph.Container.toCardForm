import React, { Component } from 'react';

class ViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        question: "What is this?",
        answer: "This is that."
      }
    }
  }

  render() {
    return (
      <div id="view_form">
        <br/>
        <button className="ui green button"
          onClick={this.props.onPublishClick.bind(this, this.state.formData)}>
          Publish
        </button>
        <button className="ui green button"
          onClick={this.props.onUpdateClick.bind(this, this.state.formData)}>
          Update
        </button>
      </div>
    )
  }
}

export default ViewForm;