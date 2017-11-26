import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import green from './test.jpeg';
import red from './test2.jpg';
class jsChangeTwo extends React.Component {
constructor(props) {
		super(props);
		this.classRight  = "App-logo-rignt";
		this.classLeft   = "App-logo-left";
		this.handleClick = this.handleClick.bind(this);
		this.tick        = this.tick.bind(this);
		this.state       = {isToggleOn: true, image: true};
		setInterval(this.tick, 500);
	}

	handleClick(event) {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
			image: !prevState.image,
		}));
	};

	tick(event) {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	};

	render() {
		return React.createElement(
			"img",
			{
				onClick:this.handleClick,
				src:this.state.image ? green : red,
				className:this.state.isToggleOn ? this.classRight : this.classLeft
			},
			);
	}
}



export default jsChangeTwo;