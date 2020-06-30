import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {DataService} from './services/data.service';

@NgModule({
  declarations: [//hold new components
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent
  ],
  imports: [// hold all modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService], // hold API and Services
  bootstrap: [AppComponent]
})
export class AppModule { }
