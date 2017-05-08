import { Events } from 'ionic-angular';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable ,Inject} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CssInjector provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CssInjector {

  constructor(@Inject(DOCUMENT) private document,
              public events: Events) {
    console.log('Hello CssInjector Provider');
  }

  injectTheme(name:string){
    console.log('CssInjector setting theme: ' + name);
    this.injectCSS('assets/css/'+name+'-theme.css');
  }

  injectCSS (url:string){
    this.document.getElementById('theme').setAttribute('href', url);
  }
}
