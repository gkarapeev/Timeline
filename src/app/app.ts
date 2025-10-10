import { Component } from '@angular/core';
import { TimelineComponent } from './components/timeline/timeline';

@Component({
  selector: 'app-root',
  template: '<app-timeline></app-timeline>',
  imports: [TimelineComponent]
})
export class App {
}
