import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPostRoutingModule } from './detail-post-routing.module';
import { DetailPostComponent } from './detail-post.component';


@NgModule({
  declarations: [
    DetailPostComponent
  ],
  imports: [
    CommonModule,
    DetailPostRoutingModule
  ]
})
export class DetailPostModule { }
