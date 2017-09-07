import { Component } from '@angular/core';

import { HtmlEditorPage } from '../html-editor/html-editor';
import { CssEditorPage } from '../css-editor/css-editor';
import { JsEditorPage } from '../js-editor/js-editor';
import { ResultViewPage } from '../result-view/result-view';



@Component({
  templateUrl: 'code-tabs.html',
})
export class CodeTabsPage {

  HTMLEditorRoot = HtmlEditorPage;
  CSSEditorRoot = CssEditorPage;
  JSEditorRoot = JsEditorPage;
  ViewRoot = ResultViewPage;

  constructor() {

  }
}

/*
HTMLEditorRoot
CSSEditorRoot
JSEditorRoot
ViewRoot
*/