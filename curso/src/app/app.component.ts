import { Component, Optional } from '@angular/core';
import { ERROR_LEVEL, LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hola mundo';

  constructor(@Optional() log?: LoggerService) {
    if(!log) return;
    log.error('Es un error')
    log.warn('Es un warn')
    log.info('Es un info')
    log.log('Es un log')
  }
}
