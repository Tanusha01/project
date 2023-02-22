import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProjectComponent } from './components/my-project/my-project.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DialogElementsExample,
  DialogElementsExampleDialog,
} from './components/dialog-elements-example-dialog/dialog-elements-example';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './material.module';

import { SwiperModule } from 'swiper/angular';

import { docsCarousel06 } from './components/docs-carousel06/docs-carousel06.component';
import { SnackBarOverviewExample } from './components/snack-bar-example/snack-bar-overview-example';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

import { LoginComponent } from './components/login/login.component';

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
    DialogElementsExample,
    DialogElementsExampleDialog,
    docsCarousel06,
    SnackBarOverviewExample,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    SwiperModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
