import p5 from 'p5';
import { Point } from '../../interfaces/point.model';
import { Space } from '../../rendering/space';
import { Draggable } from '../../rendering/draggable';
import { SketchConfig } from '../../interfaces/sketch-config.model';

function drawGrid(space: Space, sk: p5) {
  sk.strokeWeight(1);
  sk.stroke(85);

  const size = 4000;
  for (let i = -size; i <= size; i += 50) {
    const from = space.toScreen(i, -size);
    const to = space.toScreen(i, size);
    sk.line(from[0], from[1], to[0], to[1]);
  }

  for (let i = -size; i <= size; i += 50) {
    const from = space.toScreen(-size, i);
    const to = space.toScreen(size, i);
    sk.line(from[0], from[1], to[0], to[1]);
  }
}

function drawTimeline(sk: p5, space: Space) {
  sk.strokeWeight(2);
  sk.stroke(200, 150, 150);
  sk.line(...space.toScreen(-5000, 0), ...space.toScreen(5000, 0));
}

function drawPoint(point: Point, sk: p5, space: Space) {
  const [x, y] = space.toScreen(point.x, point.y);

  const mouse_x = sk.mouseX;
  const mouse_y = sk.mouseY;

  const distance = sk.dist(x, y, mouse_x, mouse_y);

  if (distance < 10) {
    sk.fill(point.color[0], point.color[1], point.color[2]);
    sk.noStroke();
    sk.ellipse(x, y, 20, 20);

    sk.fill(255);
    sk.textAlign(sk.CENTER);
    sk.text(point.name, x, y - 20);
  } else {
    sk.fill(point.color[0], point.color[1], point.color[2]);
    sk.noStroke();
    sk.ellipse(x, y, 10, 10);
  }
}

export function createSketch(config: SketchConfig, div: HTMLElement) {
  return (sk: p5) => {
    const draggable = new Draggable(sk);
    const space = new Space(
      config.initial_world_x_at_screen_center,
      config.initial_world_y_at_screen_center,
      sk.windowWidth,
      sk.windowHeight,
      config.allow_pan_y
    );

    sk.setup = () => {
      const canvas = sk.createCanvas(sk.windowWidth, sk.windowHeight);
      canvas.parent(div);
      sk.frameRate(60);
    };

    sk.draw = () => {
      sk.background(41, 45, 94);

      drawGrid(space, sk);
      drawTimeline(sk, space);

      for (let point of config.points) {
        drawPoint(point, sk, space);
      }
    };

    sk.mousePressed = () => draggable.mousePressed();
    sk.mouseDragged = () => draggable.mouseDragged(space);

    sk.mouseWheel = (event: any) => {
      space.zoom(sk, event.delta);
      return false;
    };

    sk.windowResized = () => {
      sk.resizeCanvas(sk.windowWidth, sk.windowHeight);
    };
  };
}
