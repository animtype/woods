import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PohistvoComponent } from './pohistvo/pohistvo.component';

import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {FormsModule} from '@angular/forms';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    PohistvoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule, MatCheckboxModule, FormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatDividerModule, MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
