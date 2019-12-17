import { NgModule } from '@angular/core';
import { FirstPageComponent } from './first-page.component';
import { SharedModule } from '../shared/shared.module';
import { FirstPageRoutingModule } from './first-page-routing.module';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    SharedModule,
    FirstPageRoutingModule
  ],
})
export class FirstPageModule { }
