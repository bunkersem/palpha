import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-html-editor',
  templateUrl: 'html-editor.html',
})
export class HtmlEditorPage {

  htmlContent = 
  `<h1>Hello World</h1>
  <p>Wonderfullness</p>`;

  spaces = 4;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlEditorPage');
  }

  

  
}


