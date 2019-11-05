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
let offset_X = -screenWidth / 2;
let offset_Y = -screenHeight / 2;

const worldToScreen = (x, y) => {
    let screenX = (x - offset_X) * zoomFactor;
    let screenY = (y - offset_Y) * zoomFactor;
    return [screenX, screenY]
}

const screenToWorld = (x, y) => {
    let worldX = (x / zoomFactor) + offset_X;
    let worldY = (y / zoomFactor) + offset_Y;
    return [worldX, worldY]
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
        sk.ellipseMode(sk.CENTER);
    }

    sk.draw = () => {
        sk.background(50, 50, 50);
        let pointSize_scaled = pointSize * zoomFactor;

        for (let point of points) {
            sk.fill(point.color);

            let [ pointX_Screen, pointY_Screen ] = worldToScreen(point.x, point.y);

            sk.ellipse(pointX_Screen, pointY_Screen, pointSize_scaled, pointSize_scaled);
        }
    }

    sk.mousePressed = () => {
        dragStartX = sk.mouseX;
        dragStartY = sk.mouseY;
    }

    sk.mouseDragged = () => {
        dragDistanceX = sk.mouseX - dragStartX;
        dragDistanceY = sk.mouseY - dragStartY;

        offset_X -= dragDistanceX / zoomFactor;
        offset_Y -= dragDistanceY / zoomFactor;

        dragStartX = sk.mouseX;
        dragStartY = sk.mouseY;
    }

    sk.mouseWheel = (event) => {
        // Mouse screen coordinates before zoom
        let mouse_X_screen_before_zoom = sk.mouseX;
        let mouse_Y_screen_before_zoom = sk.mouseY;

        // Mouse world coordinates before zoom
        let [ mouse_X_world_before_zoom, mouse_Y_world_before_zoom ] = screenToWorld(mouse_X_screen_before_zoom, mouse_Y_screen_before_zoom);

        // The actual zoom
        let speed = event.delta;
        zoomFactor += (speed * 0.0004);

        // Mouse screen coordinates after zoom
        let mouse_X_screen_after_zoom = sk.mouseX;
        let mouse_Y_screen_after_zoom = sk.mouseY;

        // Mouse world coordinates after zoom
        let [ mouse_X_world_after_zoom, mouse_Y_world_after_zoom ] = screenToWorld(mouse_X_screen_after_zoom, mouse_Y_screen_after_zoom);

        // Screen difference before vs. after zoom
        let world_x_difference = mouse_X_world_before_zoom - mouse_X_world_after_zoom;
        let world_y_difference = mouse_Y_world_before_zoom - mouse_Y_world_after_zoom;

        offset_X += world_x_difference;
        offset_Y += world_y_difference;

        console.log("zoom: " + zoomFactor.toFixed(3));
        // block page scrolling
        return false;
    }
}

const drawing = new p5(s);
