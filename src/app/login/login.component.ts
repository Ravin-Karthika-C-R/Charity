import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  userForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z@. ]+')]],
    psw: ['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })
  constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}

  ulogin(){
    this.ds.userLogin(this.userForm.value.email,this.userForm.value.psw)
    .subscribe({
      next:(result:any)=>{
        alert(result.message)
        localStorage.setItem("user",result._id)
        localStorage.setItem("emailid",result.email)
        localStorage.setItem("username",result.uname)
        localStorage.setItem("phone",result.ph)

        localStorage.removeItem("iconify-count")
        localStorage.removeItem("iconify-version")

        

        console.log(result._id);
        console.log(result.email);
        
        this.route.navigateByUrl("user-home")
      },
      error:(result:any)=>{
        alert(result.error.message)
        // this.route.navigateByUrl("user-register")
      } 
    })
  }
  signup(){
    this.route.navigateByUrl('user-register')
  }

}
