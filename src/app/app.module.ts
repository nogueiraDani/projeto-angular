import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { BackgroundComponentComponent } from './background-component/background-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    BackgroundComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
