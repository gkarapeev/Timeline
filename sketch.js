import './styles.scss';
import generatePoints from './points';
import generatePoints_2 from './points_2';
import * as p5 from './p5.js';


let dragStartX;
let dragStartY;
let dragDistanceX = 0;
let dragDistanceY = 0;

// Canvas
let screenHeight = 700;
let screenWidth = 1200;
let zoomFactor = 1;
let screen_offset_X = 0;
let screen_offset_Y = 0;

const worldToScreen = (x, y) => {
    screenX = (x - screen_offset_X) * zoomFactor;
    screenY = (y - screen_offset_Y) * zoomFactor;
    return [screenX, screenY]
}

// Points
let points = generatePoints_2();
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
            dragDistanceX = (sk.mouseX - dragStartX) / zoomFactor;
            dragDistanceY = (sk.mouseY - dragStartY) / zoomFactor;
        }

        for (let point of points) {
            let pointX = worldToScreen(point.x, point.y)[0];
            let pointY = worldToScreen(point.x, point.y)[1];

            sk.fill(point.color);

            sk.ellipse(pointX + dragDistanceX * zoomFactor, pointY + dragDistanceY * zoomFactor, pointSize * zoomFactor, pointSize * zoomFactor)
        }
    }

    sk.mousePressed = () => {
        dragStartX = sk.mouseX;
        dragStartY = sk.mouseY;
    }

    sk.mouseReleased = () => {
        screen_offset_X -= dragDistanceX;
        dragDistanceX = 0;
        screen_offset_Y -= dragDistanceY;
        dragDistanceY = 0;
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
