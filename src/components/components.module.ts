import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EditorComponent } from './editor/editor';


@NgModule({
	declarations: [
		EditorComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		EditorComponent
	],
	providers: []
})
export class ComponentsModule {}
