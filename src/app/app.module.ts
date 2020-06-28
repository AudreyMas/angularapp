import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [//hold new components
    AppComponent
  ],
  imports: [// hold all modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // hold API
  bootstrap: [AppComponent]
})
export class AppModule { }
