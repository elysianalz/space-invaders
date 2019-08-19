import React from 'react';
import ReactDOM from 'react-dom';

// howler
import { Howl, Howler } from 'howler';

// sounds imports
import Shoot from '../resources/sounds/shoot.wav';

// components
import Turret from './turret';
import TurretBullet from './turretbullet';
import Squid from './squid';
import Crab from './crab';
import Octopus from './octopus';

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
			},

			bullet: {
				top: 460,
				left: 20.5,
				canShoot: true,
				active: false,
				opacity: 0,
			}
		}
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.container).focus();
		this.bulletTick();
	}

	bulletTick() {
		let bullet = this.state.bullet;
		window.setInterval(() => {
			if (bullet.active && bullet.top > 0)
			{
				bullet.top -= 5;
				this.setState({bullet: bullet,});
			} else {
				this.resetBullet();
			}
		}, 12);
	}

	resetBullet() {
		let bullet = this.state.bullet;
		bullet.opacity = 0;
		bullet.top = 460;
		bullet.canShoot = true;
		bullet.active = false;
		bullet.left = this.state.turretPos.left + 20.5;
		this.setState({bullet: bullet});
	}

	shoot() {

		let bullet = this.state.bullet;

		if (bullet.canShoot && !bullet.active) {
			pew.play();
			bullet.canShoot = false;
			bullet.active = true;
			bullet.opacity = 1;
			this.setState({bullet: bullet,});
		}

	}

	handleKeyDown(e) {

		let turretPos = this.state.turretPos;
		let bullet = this.state.bullet;
		
		switch(e.key)
		{	
			case 'ArrowLeft':
				if (turretPos.left > 0)
				{
					turretPos.left -= 5;
					turretPos.right += 5;
					if(!bullet.active) {
						bullet.left -= 5
					} 
				}
			break;
			
			case 'ArrowRight':
				if (turretPos.right > 0) 
				{
					turretPos.right -= 5;
					turretPos.left += 5;
					if(!bullet.active) {
						 bullet.left += 5
					}
				}
			break;

			case ' ':
				this.shoot();
			break;
		}

		this.setState({
			turretPos: turretPos,
			bulletPos: bullet,
		});

	}

	render() {
		return	(
			<div 
			
				onKeyDown={(e) => this.handleKeyDown(e)} 
				tabIndex='-20' 
				style={styles.container}
				ref='container'>

				<Octopus />
				<Crab />
				<Squid />
				<TurretBullet position={this.state.bullet} />
				<Turret position={this.state.turretPos} />

			</div>
		)
	}
}