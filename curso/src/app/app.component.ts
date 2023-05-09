import { Component, OnInit, Optional } from '@angular/core';
import { ERROR_LEVEL, LoggerService } from '@my/core';
import { NotificationService, NotificationType } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Hola mundo';

  // constructor(@Optional() log?: LoggerService) {
  //   if(!log) return;
  //   log.error('Es un error')
  //   log.warn('Es un warn')
  //   log.info('Es un info')
  //   log.log('Es un log')
  // }
  constructor(private notify: NotificationService) {}

  ngOnInit(): void {
    // this.notify.add('Inicio la aplicación', NotificationType.info)
  }
}
