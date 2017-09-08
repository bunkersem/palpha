import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CodeProvider } from '../../providers/code/code';

@Component({
  selector: 'page-result-view',
  templateUrl: 'result-view.html',
})
export class ResultViewPage {

  constructor(public element: ElementRef, public navCtrl: NavController, public navParams: NavParams, public code: CodeProvider) {
    
  }

  ionViewDidEnter () {
    var resultView: HTMLIFrameElement = this.element.nativeElement.querySelector('#codeResult');
    var html =
    `<html>
      <head>
        <title>User App</title>
        <style id="usrCss"></style>
        <link rel="stylesheet" href="../../assets/test.css">
        <script type="text/javascript" id="usrJs"></script>        
      </head>
      <body id="usrHtml"></body>
    </html>`;
    const resDoc = resultView.contentWindow.document;
    console.log(resDoc);
    resDoc.open();
    resDoc.write(html);
    resDoc.getElementById('usrCss').innerHTML = this.code.cssCode || '';
    resDoc.getElementById('usrJs').innerHTML = this.code.jsCode || '';
    resDoc.getElementById('usrHtml').innerHTML = this.code.htmlCode || '';
    resDoc.close();
  }

}
