import React from 'react';

// aliens
import Octopus from './octopus';
import Squid from './squid';
import Crab from './crab';

const styles = {
	fleet: {
		display: 'flex',
		flexDirection: 'column',
	},
	row: {
		display: 'flex',
	}
}

export default class Fleet extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fleet: {
				squids: [[],[]],
				crabs: [[],[]],
				octopi: [[],[]],
			},
		}
	}

	componentDidMount() {
		this.generateFleet();
	}

	generateFleet() {
		const fleet = this.state.fleet;
		const aliens = [<Squid />, <Crab />, <Octopus />];

		let fleetRow = [fleet.squids, fleet.crabs, fleet.octopi];

		for (let i = 0; i < fleetRow.length; i++) {
			for (let j = 0; j < 2; j++) {
				for (let k = 0; k < 11; k++) {
					fleetRow[i][j].push(aliens[i]);
				}
			}
		}

		fleet.squids = fleetRow[0];
		fleet.crabs = fleetRow[1];
		fleetRow.octopi = fleetRow[2];

		this.setState({fleet: fleet});
		console.log(this.state.fleet);
	}

	renderFleet(i,j,k) {
		let fleetRow = [
			this.state.fleet.squids, 
			this.state.fleet.crabs, 
			this.state.fleet.octopi,
		];

		for (let i = 0; i < fleetRow.length; i++) {
			for (let j = 0; j < 2; j++) {
				for (let k = 0; k < 11; k++) {
					return fleetRow[i][j][k];
				}
			}
		}
		
	}

	render() {
		
		return (
			<div style={styles.fleet}>

				<div style={styles.row}>
					{this.state.fleet.squids[0]}
				</div>

				<div style={styles.row}>
					{this.state.fleet.squids[1]}
				</div>

				<div style={styles.row}>
					{this.state.fleet.crabs[0]}
				</div>

				<div style={styles.row}>
					{this.state.fleet.crabs[1]}
				</div>

				<div style={styles.row}>
					{this.state.fleet.octopi[0]}
				</div>

				<div style={styles.row}>
					{this.state.fleet.octopi[1]}
				</div>

			</div>
		);
	}
}