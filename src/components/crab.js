import React from 'react';

import Image from '../resources/graphics/si_characters.png';

const styles = {
	crab: {
		width: 41,
		height: 31,
		margin: '10px 11.5px',
		backgroundImage: 'url(' + Image + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '140px 140px',
		backgroundPosition: '-43px 0px',
	}
}

export default class Crab extends React.Component {
	render() {
		return (
			<div style={styles.crab}></div>
		);
	}
}