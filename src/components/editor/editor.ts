import { Component, Input } from '@angular/core';
import { CodeProvider } from '../../providers/code/code';


@Component({
  selector: 'editor',
  templateUrl: 'editor.html',
})
export class EditorComponent {

  @Input() contentName: string;
  spaces = 4;

  constructor(public code: CodeProvider) {
    
  }

  keyPressedHandler(event) {
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
    if (start < 4 || contentChars.slice(start - this.spaces, start).some(c => c !== ' '))
      return;
    
    // Remove this.spaces amount of spaces.
    event.preventDefault();
    event.stopPropagation();
    contentChars.splice(start - this.spaces, 4);
    target.value = contentChars.join('');
    target.selectionStart = target.selectionEnd = start - this.spaces
  }
}
