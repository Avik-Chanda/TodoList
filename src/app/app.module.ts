import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {AgGridModule } from 'ag-grid-angular'
import { FormsModule } from '@angular/forms'
 import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([AppComponent]),
    RouterModule.forRoot([
      {
        path : '',
        component : AppComponent
      }
    ])
  ],
  providers: [],
  entryComponents :[],
  bootstrap: [AppComponent]
})
export class AppModule { }
