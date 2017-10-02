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

  hooks = {
    'before-sanity-check': (env) => { console.log(`before-sanity-check`, env); },
    'before-highlight': (env) => { console.log(`before-highlight`, env); },
    'after-highlight': (env) => { console.log(`after-highlight`, env); },
    'complete': (env) => { console.log(`complete`, env); },
    'before-insert': (env) => { console.log(`before-insert`, env); }
  };

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
      code: `
  <!-- ng-content does not change -->
  <p align="center">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
      `
    },
    interpolation: {
      language: 'html',
      code: `
  <!-- ng-content does not change -->
  <p align="center">
    Language interpolation: '{{example.interpolation.language}}'
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
    `
    }
  };

  constructor() { }

  callback = (env) => {
    console.log('callback', env);
  }
  update($event) {
    this.example[$event.srcElement.name].code = $event.srcElement.value;
  }
  setLanguage($event) {
    this.example[$event.srcElement.name].language = $event.srcElement.value;
  }
}
