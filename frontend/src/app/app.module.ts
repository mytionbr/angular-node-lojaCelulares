import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCellphoneComponent } from './components/add-cellphone/add-cellphone.component';
import { CellphoneDetailsComponent } from './components/cellphone-details/cellphone-details.component';
import { CellphoneListComponent } from './components/cellphone-list/cellphone-list.component';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddCellphoneComponent,
    CellphoneDetailsComponent,
    CellphoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
