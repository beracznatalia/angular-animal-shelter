import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './views/animals/animals.component';
import { AnimalDetailComponent } from './views/animal-detail/animal-detail.component';
import { ContactComponent } from './views/contact/contact.component';
import { BlogComponent } from './views/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'animals', component: AnimalsComponent },
  { path: 'detail/:id', component: AnimalDetailComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent}, 
  { path: '**', component: BlogComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
