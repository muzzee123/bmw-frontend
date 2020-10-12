import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent} from './list-data/list-data.component';
import { AuthGuard } from './helpers';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes =  [
  { path: '', component: ListDataComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'list-data', component: ListDataComponent }



  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }