import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
import { SendDataService } from './send-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'DialougeMaterial';
  p:string=""
  isAdmin:boolean=false
  isUser:boolean=false
  isEmployee:boolean=false
  isLogin:boolean=false
  currentuser:any
  constructor(private router:Router,private service:ServiceService,private trans:SendDataService)
  {
        this.isAdmin=false
        this.isUser=false
        this.isEmployee=false
    sessionStorage.clear()
    this.router.navigate(['login'])
  }
  logout()
  {
    this.isAdmin=false
    this.isUser=false
    this.isEmployee=false
    sessionStorage.clear()

    this.isLogin=false
    this.router.navigate(['login'])
  }
  ngDoCheck(): void
  {
    if(this.service.isLoggedIn())
      {
        this.isLogin=true
      }
      else
      this.isLogin=false  
  }
  ngOnInit(): void {

    this.trans.transferdata.subscribe((d)=>{
      this.currentuser=d
      this.router.navigate(['home'])
      if(this.currentuser==="admin")
      {
        this.isAdmin=true
        this.isUser=true
        this.isEmployee=true
      }
      else if(this.currentuser==="user")
      {
        this.isUser=true
        this.isEmployee=true
      }
      else if(this.currentuser==="employee")
      {
        this.isEmployee=true
      }
      
    })
    
  }
}
