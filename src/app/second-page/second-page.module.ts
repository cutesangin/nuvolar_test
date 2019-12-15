import { NgModule } from '@angular/core';
import { SecondPageComponent } from './second-page.component';
import { SharedModule } from '../shared/shared.module';
import { SecondPageRoutingModule } from './second-page-routing.module';



@NgModule({
  declarations: [SecondPageComponent],
  imports: [
    SharedModule,
    SecondPageRoutingModule,
  ]
})
export class SecondPageModule { }
