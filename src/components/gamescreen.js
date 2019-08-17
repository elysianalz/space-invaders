import React from 'react';
import ReactDOM from 'react-dom';

// howler
import { Howl, Howler } from 'howler';

// sounds imports
import Shoot from '../resources/sounds/shoot.wav';

// components
import Turret from './turret';

// delay
const delay = require('delay');

// sounds
var pew = new Howl({
	src: [Shoot],
	autoplay: false,
	loop: false,
	volume: 0.8,
});

const styles = {
	container: {
		width: 800,
		height: 500,
		padding: 30,
		backgroundColor: 'black',
	}
}

export default class GameScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			turretPos: {
				left: 1,
				right: 760,
			}
		}
	}

	componentDidMount(){
		ReactDOM.findDOMNode(this.refs.container).focus();
	}

	handleKeyDown(e) {
		let turretPos = this.state.turretPos;
		
		switch(e.key){
			
			case 'ArrowLeft':
				if (turretPos.left > 0)
				{
					turretPos.left -= 5;
					turretPos.right += 5;
				}
				break;
			
			case 'ArrowRight':
				if (turretPos.right > 0) 
				{
					turretPos.right -= 5;
					turretPos.left += 5;
				}
				break;

			case ' ':
				// move handling into state
				/*(async () => {
				    await delay(1000);
				})();*/
				pew.play();
				break;
		
		}

		this.setState({
			turretPos: turretPos,
		});

	}

	render() {
		return	(
			<div 
				onKeyDown={(e) => this.handleKeyDown(e)} 
				tabIndex='-20' 
				style={styles.container}
				ref='container'>

				<Turret position={this.state.turretPos} />

			</div>
		)
	}
}