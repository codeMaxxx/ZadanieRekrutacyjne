import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SinglePostComponent} from './single-post/single-post.component';
import {PostsComponent} from './posts/posts.component';


const routes: Routes = [
  {path: 'post/:id', component: SinglePostComponent},
  {path: 'posts', component: PostsComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
