import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainComponent } from './contain/contain.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';


const AppRoutes: Routes = [

  { path: "" , component: ContainComponent },
  { path: 'home', component: ContainComponent },
  { path: 'products', component: PostComponent },
  { path: 'products/:id', component: PostComponent },
  { path: 'products/author/:name', component: ContainComponent },
  

]; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
