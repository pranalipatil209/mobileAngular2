import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {navBarComponent} from './navbar/navbar.component';
import {sidebarComponent} from './sidebar/sidebar.component';
import {productComponent} from './product/product.component';
import {productService} from './product/product.service';


@NgModule({
  declarations: [
    AppComponent,
    navBarComponent,
    sidebarComponent,
    productComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    productService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
