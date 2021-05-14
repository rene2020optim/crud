import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit', component: EditComponent },
  { path: 'read', component: ReadComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
