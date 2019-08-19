import React from 'react';

// image resources
import Image from '../resources/graphics/si_characters.png';

const styles = {
	octopus: {
		width: 44,
		height: 30,
		backgroundImage: 'url(' + Image + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '140px 140px',
		backgroundPosition: '-96px 0px',
	}
}

export default class Octopus extends React.Component {
	render() {
		return (
			<div style={styles.octopus}></div>
		);
	}
}