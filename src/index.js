import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import HelloMessage from './HelloMessage';
import TodoApp from './TodoApp';
import MarkdownEditor from './MarkdownEditor';
import cssChange from './cssChange';
import jsChange from './jsChange';
import jsChangeTwo from './jsChangeTwo';
import TodoListtest from './TodoListtest';
import Clock from './Clock';
import './App.css';

// ReactDOM.render(
// 	React.createElement(Timer, null), document.getElementById('root')
// );

// ReactDOM.render(React.createElement(HelloMessage, { name: "Johsn" }), document.getElementById('root2')
// );

// ReactDOM.render(React.createElement(TodoApp, null),  document.getElementById('root3'));

// ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('root4'));
ReactDOM.render(React.createElement(jsChangeTwo, null), document.getElementById('root5'));
// ReactDOM.render(React.createElement(jsChange, null), document.getElementById('root6'));
// ReactDOM.render(React.createElement(TodoListtest, null), document.getElementById('root7'));
//ReactDOM.render(<Clock />,document.getElementById('root8'));

