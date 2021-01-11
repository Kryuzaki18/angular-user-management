import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { UsersComponent } from '@app/users/users.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent }
];
  
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}