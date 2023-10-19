import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
path:any=''
  userRegForm=this.fb.group({
    uname:[''],
    email:[''],
    ph:[''],
    psw:[''],
    cpsw:['']
    
  })
  constructor(private fb:FormBuilder, private ds:DataService, private route:Router){

  }
  register(){
    this.ds.userRegister(this.userRegForm.value.uname,this.userRegForm.value.email,this.userRegForm.value.ph,this.userRegForm.value.psw)
    .subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.route.navigateByUrl('user-login')
      },
      error:(result:any)=>{
        alert(result.error.message)
        
      }
    })

  }

}
