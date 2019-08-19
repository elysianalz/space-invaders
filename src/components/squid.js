import React from 'react';

// image resource
import Image from '../resources/graphics/si_characters.png';

const styles = {
	squid: {
		position: 'relative',
		width: 32,
		height: 31,
		backgroundImage: 'url(' + Image + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '140px 140px',
	},
};

export default class Squid extends React.Component {
	render() {
		return (
			<div style={styles.squid}></div>
		);
	}
}