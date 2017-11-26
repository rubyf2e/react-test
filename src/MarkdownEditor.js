import React from 'react';
import Remarkable from 'remarkable';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'test' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return React.createElement(
      "div",
      { className: "MarkdownEditor" },
      React.createElement(
        "h3",
        null,
        "Input"
      ),
      React.createElement("textarea", {
        onChange: this.handleChange,
        defaultValue: this.state.value }),
      React.createElement(
        "h3",
        null,
        "Output"
      ),
      React.createElement("div", {
        className: "content",
        dangerouslySetInnerHTML: this.getRawMarkup()
      })
    );
  }
}


export default MarkdownEditor;
