import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { InitComponent } from './components/init/init.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { FlatRegisterComponent } from './components/flat-register/flat-register.component';
import { FlatDetailsComponent } from './components/flat-details/flat-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TopBarComponent,
    InitComponent,
    MainMenuComponent,
    FlatListComponent,
    FlatRegisterComponent,
    FlatDetailsComponent,
    UserDetailsComponent,
    PasswordChangeComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: InitComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'main', component: MainMenuComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
