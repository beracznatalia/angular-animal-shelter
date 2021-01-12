import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './views/animals/animals.component';
import { AnimalDetailComponent } from './views/animal-detail/animal-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './views/shared/shared.module';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalDetailComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
