import { Component } from '@angular/core';
import {
  EventSettingsModel,
  View,
  EventRenderedArgs,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  // template:
  //   '<ejs-schedule height="820" [currentView]="currentView"></ejs-schedule>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .e-appointment-container {
        margin: 0 25%;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Scheduler';
  public eventSettings: EventSettingsModel = {};
  public currentView: View = 'MonthAgenda';

  oneventRendered(args: EventRenderedArgs): void {
    args.element.style.backgroundColor = 'red';
  }
}
