import React from 'react';

// image resource
import Image from '../resources/graphics/si_characters.png';

// styles
const styles = {
	turret: {
		position: 'relative',
		width: 43,
		height: 30,
		backgroundImage: 'url(' + Image + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '140px 140px',
		backgroundPosition: '-13px -112px',
	},
};

export default class Turret extends React.Component {
	render() {
		return (
			<div 
				className='turret' 
				position={this.props.position} 
				style={Object.assign({}, styles.turret, this.props.position)}>
			</div>
		)
	}
}