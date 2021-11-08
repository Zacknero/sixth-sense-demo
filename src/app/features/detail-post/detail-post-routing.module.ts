import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPostComponent } from './detail-post.component';

const routes: Routes = [{ path: '', component: DetailPostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPostRoutingModule { }
