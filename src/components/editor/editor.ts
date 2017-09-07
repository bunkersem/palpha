import { Component, isDevMode } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the EditorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'editor',
  templateUrl: 'editor.html'
})
export class EditorComponent {


  textEditor = 
  `<h1>Hello World</h1>
  <p>Wonderfullness</p>`;

  spaces = 4;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  keyPressedHandler(event) {
    if (isDevMode)
      console.log(event, event.keyCode);
    if (event.keyCode === 9)  // If its a Tab
      this.tabKeyPressedHandler(event);
    else if (event.keyCode === 8) 
      this.backSpaceKeyPressedHandler(event);
    
  }

  tabKeyPressedHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    var target: HTMLTextAreaElement = event.target.closest('ion-textarea#textEditor textarea');
    var start = target.selectionStart;
    var end = target.selectionEnd;
    var contentChars = target.value.split('');
    contentChars.splice(start, 0, ' '.repeat(this.spaces));
    target.value = contentChars.join('');
    target.selectionStart = target.selectionEnd = start + this.spaces;
  }

  backSpaceKeyPressedHandler(event) {
    var target: HTMLTextAreaElement = event.target.closest('ion-textarea#textEditor textarea');
    var start = target.selectionStart;
    var end = target.selectionEnd;
    if (start !== end)
      return;

    var contentChars = target.value.split('');
    if (contentChars.slice(start - this.spaces, start).some(c => c !== ' '))
      return;
    
    // Remove this.spaces amount of spaces.
    event.preventDefault();
    event.stopPropagation();
    contentChars.splice(start - this.spaces, 4);
    target.value = contentChars.join('');
    target.selectionStart = target.selectionEnd = start - this.spaces
  }

}
