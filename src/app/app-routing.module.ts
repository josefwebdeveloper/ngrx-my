import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateComponent} from './create/create.component';
import {ReadComponent} from './read/read.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'read', component: ReadComponent},
];
// path: 'courses',
//   loadChildren: './courses/courses.module#CoursesModule',
//   canActivate: [AuthGuard],
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
