import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('textarea') textarea: ElementRef;

  language = 'css';
  title = 'app';

  example = {
    css: {
      language: 'css',
      code: `
    /* ng-content does not change.*/
    .item {
      text-align: center;
    }
      `
    },
    html: {
      language: 'html',
      code:
    `<!-- ng-content does not change -->
    <p align="center">
      HTML example
    </p>
      `
    },
    interpolation: {
      language: 'html',
      code: `
    <p align="center">
      Language interpolation: '{{language}}'
    </p>
    `
    }
  };

  constructor() { }

  callback = () => {
    console.log('callback');
  }
  update($event) {
    this.example[$event.srcElement.name].code = $event.srcElement.value;
  }
  setLanguage($event) {
    this.language = $event.srcElement.value;
  }
}
