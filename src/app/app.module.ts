import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.module';
import { ManagerModule } from './manager/manager/manager.module';
import { HomeComponent } from './pages/home/home.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { AuthComponent } from './pages/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPageComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingModule,
    ManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
