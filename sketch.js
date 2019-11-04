import './styles.scss';
import generatePoints from './points';
import * as p5 from './p5.js';


let dragStartX;
let dragStartY;
let diffX = 0;
let diffY = 0;

// Canvas
let screenHeight = 700;
let screenWidth = 1200;
let zoomFactor = 2;
let screen_offset_X = 0;
let screen_offset_Y = 0;

const worldToScreen = (x, y) => {
    screenX = (x - screen_offset_X) * zoomFactor;
    screenY = (y + screen_offset_Y) * zoomFactor;
    return [screenX, screenY]
}

// Points
let points = generatePoints();
let pointSize = 30;

// Sketch
let s = (sk) => {
    sk.setup = () => {
        sk.createCanvas(screenWidth, screenHeight).parent("#sketch-container");
        sk.frameRate(20);
        sk.background(50);
    }

    sk.draw = () => {
        sk.background(50, 50, 50);
        sk.ellipseMode(sk.CENTER);

        if (sk.mouseIsPressed) {
            diffX = sk.mouseX - dragStartX;
            diffY = sk.mouseY - dragStartY;
        }

        for (let point of points) {
            sk.fill(point.color);
            sk.ellipse(worldToScreen(point.x, point.y)[0] + diffX, worldToScreen(point.x, point.y)[1] + diffY, pointSize * zoomFactor, pointSize * zoomFactor)
        }
        console.log(screen_offset_Y)
    }

    sk.mousePressed = () => {
        dragStartX = sk.mouseX;
        dragStartY = sk.mouseY;
    }

    sk.mouseReleased = () => {
        screen_offset_X -= diffX;
        diffX = 0;
        screen_offset_Y += diffY;
        diffY = 0;
    }

    sk.mouseWheel = (event) => {
        let speed = event.delta;
        zoomFactor += (speed * 0.01);
        console.log(zoomFactor)
        // block page scrolling
        return false;
    }
}

const drawing = new p5(s);
