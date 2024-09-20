import generatePoints from './data/points.js';
import generatePoints_2 from './data/points_2.js';
import { worldToScreen, screenToWorld } from './utils.js';

let dragStartX;
let dragStartY;
let dragDistanceX = 0;
let dragDistanceY = 0;

// Canvas
const lockHorizontal = false;
let screenHeight = 700;
let screenWidth = 1600;
let zoomFactor = 12;
let offset_X = lockHorizontal ? 1952 : 0;
let offset_Y = -screenHeight / 2;

// Points
let points = generatePoints_2();
const pointSize = 30;

// Sketch
let s = (sk) => {
    sk.setup = () => {
        sk.createCanvas(screenWidth, screenHeight).parent("#sketch-container");
        sk.frameRate(60);
        sk.background(50);
        sk.ellipseMode(sk.CENTER);
        sk.noStroke();
        sk.textAlign(sk.CENTER);
    }

    sk.draw = () => {

        // Draw the timeline
        sk.noStroke();
        sk.background(60);
        sk.fill(170)
        sk.rectMode(sk.CENTER);
        sk.rect(screenWidth / 2, screenHeight / 2 + 20, screenWidth - 20, 1);

        // Draw the points
        let pointSize_scaled = sk.constrain(pointSize * zoomFactor * 0.3, 5, 20);


        for (let point of points) {

            let [ pointX_Screen, pointY_Screen ] = worldToScreen(point.x, point.y, offset_X, offset_Y, zoomFactor);
            // Point indicator
            sk.strokeWeight(1);
            sk.stroke(170);
            sk.line(pointX_Screen, screenHeight / 2, pointX_Screen, screenHeight / 2 + 20)

            // Point
            sk.strokeWeight(2);
            sk.fill(point.color);
            sk.ellipse(pointX_Screen, lockHorizontal ? screenHeight / 2 : pointY_Screen, pointSize_scaled, pointSize_scaled);

            // Name
            sk.noStroke();
            sk.fill("white");
            sk.textSize(16);
            sk.text("- " + point.x + " -", pointX_Screen, screenHeight / 2 + 20 + 40 * point.id);
            sk.fill(200)
            sk.textSize(12);
            sk.text(point.name, pointX_Screen, screenHeight / 2 + 40 + 40 * point.id);
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
        let [ mouse_X_world_before_zoom, mouse_Y_world_before_zoom ] = screenToWorld(mouse_X_screen_before_zoom, mouse_Y_screen_before_zoom, offset_X, offset_Y, zoomFactor);

        // The actual zoom
        let speed = event.delta;
        zoomFactor = sk.constrain(zoomFactor + speed * 0.0005, 0.01, 20);
        console.log(offset_X)

        // Mouse screen coordinates after zoom
        let mouse_X_screen_after_zoom = sk.mouseX;
        let mouse_Y_screen_after_zoom = sk.mouseY;

        // Mouse world coordinates after zoom
        let [ mouse_X_world_after_zoom, mouse_Y_world_after_zoom ] = screenToWorld(mouse_X_screen_after_zoom, mouse_Y_screen_after_zoom, offset_X, offset_Y, zoomFactor);

        // Screen difference before vs. after zoom
        let world_x_difference = mouse_X_world_before_zoom - mouse_X_world_after_zoom;
        let world_y_difference = mouse_Y_world_before_zoom - mouse_Y_world_after_zoom;

        offset_X += world_x_difference;
        offset_Y += world_y_difference;

        // block page scrolling
        return false;
    }
}

const drawing = new p5(s);
