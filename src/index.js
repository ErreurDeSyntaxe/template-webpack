// Template JavaScript File

// The command for webpack to recompile code on save is 'npm run watch'
// Just write that in the CLI and let webpack 'watch' for changes

import './style.css';
import Logo from './img/odin-logo.svg';
import greetMe from './script';

const odinLogo = new Image();
odinLogo.src = Logo;
const body = document.querySelector('body');
body.appendChild(odinLogo);

console.log('Hello, World!');
greetMe();
