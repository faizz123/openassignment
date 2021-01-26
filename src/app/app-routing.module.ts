import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =
 [
     {path:"",component:LayoutComponent},
     {path:"login",component:LoginComponent},
     {path:"getstarted",component:GetstartedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
