import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from "./login/login.component";
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import{HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
