import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data:any|undefined
  constructor(private service:ServiceService,private toster:ToastrService,private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(this.service.isLoggedIn())
    {
      if (route.url.length > 0) {
        let path = route.url[0].path;
        let role:any
        let currentusername=sessionStorage.getItem('username')
        this.service.loginUser(currentusername?.substring(1,currentusername.length-1)).subscribe((x)=>
        {
          this.data=x
        })
        this.data=this.data[0]
        if(path==="admin")
        {
          if(this.data.role==="admin")
          {
            return true
          }
          else
          {
            this.toster.warning("You can't access ADMIN page")
            return false
          }
        }
        if(path==="user")
        {
          if(this.data.role==="admin" || this.data.role==="user")
          {
            return true
          }
          else
          {
            this.toster.warning("You can't access USER page")
            return false
          }
        }
      }
      return true
    }
    else{
      this.toster.warning('Please login to accesss')
      this.router.navigate(['login'])
      return false
    }
  }
  
}
