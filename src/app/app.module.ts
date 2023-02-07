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
import { DialogElementsExample, DialogElementsExampleDialog } from './dialog-elements-example-dialog/dialog-elements-example';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialExampleModule} from './material.module';


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
    FooterComponent,
    DialogElementsExample, DialogElementsExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, DialogElementsExample]
})
export class AppModule { }
