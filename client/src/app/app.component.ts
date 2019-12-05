import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  selectedTemplate;

  constructor(private server: ServerService) {
    this.server.getApi().then((res: any) => {
      console.log(res);
    });
  }

  setTemplate(template) {
    this.selectedTemplate = template;
  }
}
