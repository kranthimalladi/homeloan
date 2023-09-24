import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './about/header/header.component';
import { FooterComponent } from './components/services/footer/footer.component';

const routes: Routes = [
  {
    path:"/",
    component:HomeComponent
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent

  },
  {
    path:"login",
    component:LoginComponent

  },
  {
    path:"header",
    component:HeaderComponent
    
  }, {
    path:"footer",
    component:FooterComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
