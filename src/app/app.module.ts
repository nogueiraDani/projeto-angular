import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormLocationComponentComponent } from './form-location-component/form-location-component.component';
import { FormDateComponentComponent } from './form-date-component/form-date-component.component';
import { FormSelectComponentComponent } from './form-select-component/form-select-component.component';
import { FormButtonComponentComponent } from './form-button-component/form-button-component.component';
import { FormNavComponentComponent } from './form-nav-component/form-nav-component.component';
import { FormTitleComponentComponent } from './form-title-component/form-title-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    BackgroundComponentComponent,
    MainComponentComponent,
    FormComponentComponent,
    FormLocationComponentComponent,
    FormDateComponentComponent,
    FormSelectComponentComponent,
    FormButtonComponentComponent,
    FormNavComponentComponent,
    FormTitleComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
