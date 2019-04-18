import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatListPage } from './cat-list';

@NgModule({
  declarations: [
    CatListPage,
  ],
  imports: [
    IonicPageModule.forChild(CatListPage),
  ],
})
export class CatListPageModule {}
