import { Component, AfterViewInit, inject, ElementRef } from '@angular/core';
import p5 from 'p5';
import { SketchConfig } from '../../interfaces/sketch-config.model';
import { createSketch } from './timeline.utils';
import { linePointsConfig } from '../../config/data.config';

@Component({
  selector: 'app-timeline',
  template: '',
  styles: [':host { display: block; width: 100%; height: 100%; }'],
})
export class TimelineComponent implements AfterViewInit {
  private el = inject(ElementRef)

  ngAfterViewInit() {
    const sketch = createSketch(linePointsConfig, this.el.nativeElement);
    new p5(sketch);
  }
}
