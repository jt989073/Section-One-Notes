import Game from './game.js'
import { someFunc } from './game.js';

window.onload = () => {
    someFunc()
    const game = new Game();
    game.start();
};