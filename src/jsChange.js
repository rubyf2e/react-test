import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import green from './test3.jpeg';
import red from './test4.jpeg';
class cssChange extends React.Component {
	constructor(props) {
		super(props);
		this.className   = "App-logo";
		this.handleClick = this.handleClick.bind(this);
		this.tick        = this.tick.bind(this);
		this.widthadd    = this.widthadd.bind(this);
		this.state       = {isToggleOn: true, image: true, width:1};
	}

	componentWillMount() {

	};

	handleClick(event) {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
			image: !prevState.image,
		}));
	};

	tick(event) {
		this.setState(prevState => ({
			image: !prevState.image,
		}));
	};

	widthadd(event) {
		if(this.state.width != 100)
		{
			this.setState({
				width: this.state.width+1,
			});
		}
	};

	componentDidMount() {
		setInterval(this.tick, 500);
		setInterval(this.widthadd, 10);
	};

	render() {
		return React.createElement(
			"img",
			{
				onClick:this.handleClick,
				src:this.state.image? green : red,
				className:this.className,
				width:this.state.width+"%",
			},
			);
	}
}



export default cssChange;