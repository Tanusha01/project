import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { MyProjectComponent } from './my-project/my-project.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'home', component:HomePageComponent},
{path:'offer', component:MyProjectComponent},
{path:'about', component:AboutUsComponent},
{path:'contacts', component:ContactsComponent},
{path:'menu', component:MenuComponent},
{path:'**', component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
