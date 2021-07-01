import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module'; // Autoimport Línea 11 - Modulo custom: HomeModule
import { LoginModule } from './modules/login/login.module'; // Autoimport Línea 11 - Modulo custom: LoginModule

import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    AuthModule.forRoot({
      domain: 'rmouzoapp.us.auth0.com',
      clientId: 'heLoPGZ11OwdehoepLVuIiFg3hJWs0iS',
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
