import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import TodosRootComponent from './todos-root.component';


const routes: Routes = [
  {
    path: '',
    component: 'todos-root.component'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class GetThingsDoneRoutingModule { }
