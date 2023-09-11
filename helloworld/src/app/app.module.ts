import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule } from '@angular/forms';
import { CarsService } from './cars.service';

@NgModule({
  declarations: [AppComponent, PracticeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
