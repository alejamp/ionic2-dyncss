import { Component, Inject, OnInit } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { DOCUMENT } from '@angular/platform-browser';
import { CssInjector } from '../../providers/css-injector';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(@Inject(DOCUMENT) private document,  
              public navCtrl: NavController,
              public events: Events,
              public cssInjector: CssInjector) {
  }

  ngOnInit() {

  }

  setTheme(name:string){
    this.cssInjector.injectTheme(name);
  }

}
