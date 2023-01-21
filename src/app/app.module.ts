import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

const routes=[
{path:'', component:MyProjectComponent},
{path:'about', component:AboutUsComponent},
{path:'contacts', component:ContactsComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    MyProjectComponent,
    AboutUsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
