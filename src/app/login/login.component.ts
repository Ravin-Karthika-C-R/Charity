import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  userForm = this.fb.group({
    email: [''],
    psw: ['']
  })
  constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}

  ulogin(){
    this.ds.userLogin(this.userForm.value.email,this.userForm.value.psw)
    .subscribe({
      next:(result:any)=>{
        alert(result.message)
        localStorage.setItem("user",result._id)
        // console.log(result.message);
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
