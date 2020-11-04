import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppliComponent} from './appli/appli.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DataComponent} from './data/data.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {MatIconModule, MatListModule, MatSidenavModule, MatTableModule} from '@angular/material';
import { SeriesComponent } from './series/series.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {SeriesService} from './series.service';
import { RequeteApiComponent } from './requete-api/requete-api.component';
import {RequeteApiService} from './requete-api.service';
import {HttpClient, HttpClientModule, HttpHandler, HttpHeaders} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {HeaderService} from './header/header.service';
import { BadGuysComponent } from './header/bad-guys/bad-guys.component';
import {BadGuysService} from './bad-guys.service';



const appRoutes: Routes = [

  {path: 'data', component: DataComponent},

  {path: '', component: AppliComponent},

  {path: 'series', component: SeriesComponent},

  {path: 'requete', component: RequeteApiComponent},

  {path: 'game', component: BadGuysComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    AppliComponent,
    DataComponent,
    HeaderComponent,
    SeriesComponent,
    SideNavComponent,
    RequeteApiComponent,
    BadGuysComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatIconModule

  ],

  exports: [RouterModule],

  bootstrap: [AppComponent],
  providers: [SeriesService, RequeteApiService, HttpClient, HttpClientModule, DataService, HeaderService, BadGuysService]
})
export class AppModule {
}
