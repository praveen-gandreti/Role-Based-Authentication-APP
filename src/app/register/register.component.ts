import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private toster:ToastrService,private service:ServiceService)
  {

  }
  form= new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    role:new FormControl('')
  })
  register()
  {
    if(this.form.valid)
    {
      this.service.newRegistration(this.form.value).subscribe((x)=>
      {
        this.toster.success('Registration successfull')
      })
      this.form.reset()
    }
    else
    {
      this.toster.warning('Please fill the form')
    }
    
  }
}
