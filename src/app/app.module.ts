import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { PeliculasModule } from './modules/peliculas/peliculas.module';
import { ActoresModule } from './modules/actores/actores.module';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    PeliculasModule,
    ActoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
