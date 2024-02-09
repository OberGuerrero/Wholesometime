import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
