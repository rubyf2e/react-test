import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TransitionGroup from 'react-transition-group/TransitionGroup';
class TodoListtest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       items:[1, 2, 3]
    }
  }
  _addItem() {
    let items = this.state.items;
    items.push(items.length + 1);
    this.setState({items: items });
  }
  _deleteItem() {
    let items = this.state.items;
    items.pop();
    this.setState({items: items });
  }
  _renderItems() {
      return this.state.items.map((item, i) => {
          return (
            <li key={i}>NO. {item}</li>
          );
      });
  }
  render() {
    let items = this._renderItems();
    return (
      <div>
        <button onClick={this._addItem.bind(this)}>add item</button>
        <button onClick={this._deleteItem.bind(this)}>delete item</button>
          <CSSTransitionGroup  
            component="ul" 
            transitionName="item" 
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}>
            {items}
          </CSSTransitionGroup >
      </div>
    );
  }
}



export default TodoListtest;