import './styles.scss';
import generatePoints from './points';
import * as p5 from './p5.js';






let s = (sk) => {
    // Canvas
    let screenHeight = 700;
    let screenWidth = 1200;

    sk.setup = () => {
        sk.createCanvas(screenWidth, screenHeight).parent("#sketch-container");
        sk.background(50);
    }

    sk.draw = () => {
        sk.background(50, 50, 50);
        sk.noFill();
        sk.strokeWeight(2);
        sk.stroke('white');
        sk.rect(100, 100, 50, 50);
    }

    sk.mouseWheel = (event) => {
        let speed = event.delta;
        // block page scrolling
        return false;
    }
}

const drawing = new p5(s);
