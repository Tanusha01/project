import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes=[
{path:'home', component:HomePageComponent},
{path:'offer', component:MyProjectComponent},
{path:'about', component:AboutUsComponent},
{path:'contacts', component:ContactsComponent},
{path:'menu', component:MenuComponent},
{path:'error', component:ErrorComponent}




]

@NgModule({
  declarations: [
    AppComponent,
    MyProjectComponent,
    AboutUsComponent,
    ContactsComponent,
    HomePageComponent,
    MenuComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
