import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ComponentsModule } from '../components/components.module';
import { ProvidersModule } from '../providers/providers.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CodeTabsPage } from '../pages/code-tabs/code-tabs';
import { HtmlEditorPage } from '../pages/html-editor/html-editor';
import { CssEditorPage } from '../pages/css-editor/css-editor';
import { JsEditorPage } from '../pages/js-editor/js-editor';
import { ResultViewPage } from '../pages/result-view/result-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CodeTabsPage,
    HtmlEditorPage,
    CssEditorPage,
    JsEditorPage,
    ResultViewPage,
  ],
  imports: [
    ComponentsModule, 
    ProvidersModule,   
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'top',
      tabsHideOnSubPages : false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CodeTabsPage,
    HtmlEditorPage,
    CssEditorPage,
    JsEditorPage,
    ResultViewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
