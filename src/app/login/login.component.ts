import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { SendDataService } from '../send-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  userdata:any
  constructor(private toster:ToastrService,private service:ServiceService,private router:Router,private trans:SendDataService)
  {
  }
  form= new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  reg()
  {
    this.router.navigate(['register'])
  }
  login()
  {
    
    if(this.form.valid)
    {
      this.service.loginUser(this.form.value.username).subscribe((x:any)=>{
        this.userdata=x        
        if(x.length!=0)
        {
          if(this.userdata[0].password===this.form.value.password)
          {
            this.trans.transfer(this.userdata[0].role)
            sessionStorage.setItem('username',JSON.stringify(this.form.value.username))
            this.router.navigate(['home'])
            this.toster.success('Login successfull')
            
          }
          else
          {
            this.toster.error('InValid Credentials')
          }
        }
        else{
          this.toster.error('Details MisMatch')
        }
        
      })
      
    }
    else
    {
      this.toster.warning('Please fill the form')
    }
  }

}
