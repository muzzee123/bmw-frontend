import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDataComponent } from './list-data/list-data.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxPaginateModule } from 'ngx-paginate';
import { fakeBackendProvider } from './helpers';
import { DatePipe } from '@angular/common';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgxPaginateModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // p rovider used to create fake backend
    fakeBackendProvider,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
