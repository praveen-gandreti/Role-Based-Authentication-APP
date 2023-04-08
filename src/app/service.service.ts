import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient)
  {

  }
  newRegistration(user:any)
  {
    return this.http.post('http://localhost:3000/users',user)
  }
  loginUser(user:any)
  {
    return this.http.get('http://localhost:3000/users?username='+user)
  }
  isLoggedIn()
  {
    if(sessionStorage.getItem('username'))
    {
      return true
    }
    else
    return false
  }
  sendRole(username:any)
  {
    let rl
    this.http.get('http://localhost:3000/users?username='+username).subscribe((x)=>
    {
      console.log(x)
      console.log("---------------------------")
    })
  }
  
}
