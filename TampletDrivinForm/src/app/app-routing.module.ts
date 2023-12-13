import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmenttableComponent } from './enrollmenttable/enrollmenttable.component';
const routes: Routes = [
  { path: 'enrollments', component: EnrollmenttableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
