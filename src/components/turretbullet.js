import React from 'react';

// image resource
import Image from '../resources/graphics/si_characters.png';

const styles = {
	bullet: {
		position: 'relative',
		width: 4,
		height: 16,
		backgroundImage: 'url(' + Image + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '140px 140px',
		backgroundPosition: '-32px -84px',
		opacity: 0,
	},
}
export default class TurretBullet extends React.Component {
	render() {
		return (
			<div style={Object.assign({}, styles.bullet, this.props.position)}></div>
		)
	}
}