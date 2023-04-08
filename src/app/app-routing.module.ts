import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'user',component:UserComponent,canActivate:[AuthGuard]
  },
  {
    path:'admin',component:AdminComponent,canActivate:[AuthGuard]
  },
  {
    path:'employee',component:EmployeeComponent,canActivate:[AuthGuard]
  },
  {
    path:'register',component:RegisterComponent,
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
