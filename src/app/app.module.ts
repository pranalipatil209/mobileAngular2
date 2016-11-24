import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {navBarComponent} from './navbar/navbar.component';
import {sidebarComponent} from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    navBarComponent,
    sidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
