import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddOrganizationComponent } from './SuperAdmin/add-organization/add-organization.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddOrganizationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
