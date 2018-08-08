import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannPage } from './scann';

@NgModule({
  declarations: [
    ScannPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannPage),
  ],
})
export class ScannPageModule {}
