import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

//Para rutas
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalles/:id',  component: DetallesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    DetallesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyA4UyBLPV2Op1BNg31pMhHI8UfNne6e6n8'
   })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
