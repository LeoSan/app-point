import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
