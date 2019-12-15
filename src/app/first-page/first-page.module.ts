import { NgModule } from '@angular/core';
import { FirstPageComponent } from './first-page.component';
import { SharedModule } from '../shared/shared.module';
import { FirstPageRoutingModule } from './first-page-routing.module';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [FirstPageComponent, ChildComponent],
  imports: [
    SharedModule,
    FirstPageRoutingModule
  ],
})
export class FirstPageModule { }
