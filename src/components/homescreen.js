import React from 'react';

// title
import Title from '../resources/graphics/si_logo.png';

const styles = {

	title: {
		width: 600,
	},

	press: {
		fontFamily: 'Press Start 2P',
		textAlign: 'center',
		marginTop: 50,
	},

};

export default class HomeScreen extends React.Component {

	componentDidMount(){
		this.flashText('startGame');
	}

	flashText(classname){
		let text = document.querySelector('.' + classname);
		window.setInterval(function(){
			if(text.style.opacity == 1){
				text.style.opacity = '0';
			} else {
				text.style.opacity = '1';
			}
		}, 400);
	}

	render() {
		return (
			<div style={styles.screen}>
				<img style={styles.title} src={Title} />
				<h3 className='startGame' style={styles.press}>Press any key to start</h3>
			</div>
		);
	}

}