import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { ReadComponent } from './components/read/read.component';

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
