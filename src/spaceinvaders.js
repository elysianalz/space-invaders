import React from 'react'

// images
import Background from './resources/graphics/invaders.png';

// howler
import { Howl, Howler } from 'howler';

// screens
import HomeScreen from './components/homescreen';
import GameScreen from './components/gamescreen';

const styles = {
	environment: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundImage: 'url(' + Background + ')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	}
};

export default class SpaceInvaders extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			started: false,
			gameover: false,
		}
	}

	handleKeyPress(e){
		if (!this.state.started) {
			this.setState({
				started: true,
			});
		}
	}

	render() {
		
		return	(
			<div 
				onKeyDown={(e) => this.handleKeyPress(e)} 
				tabIndex='-19' 
				style={styles.environment}>

				{
					this.state.started ? <GameScreen /> : <HomeScreen />
				}
				
			</div>
		)
	}

}