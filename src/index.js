import React from 'react';
import ReactDOM from 'react-dom';

// game engine
import SpaceInvaders from './spaceinvaders';

// howler
import { Howl, Howler } from 'howler';

// sounds
import Theme from './resources/sounds/theme.mp3';

/*var themeSong = new Howl({
	src: [Theme],
	autoplay: true,
	loop: true,
	volume: 0.5,
});

themeSong.play();*/

ReactDOM.render(<SpaceInvaders/>, document.getElementById('root'));