import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
path:any=''
pswCheck: any = false

  userRegForm=this.fb.group({
    uname:['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    email:['',[Validators.required, Validators.pattern('[a-zA-Z@. ]+')]],
    ph:['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw:['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw:['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
    
  })
  constructor(private fb:FormBuilder, private ds:DataService, private route:Router){

  }
  register(){
    var path = this.userRegForm.value

    
    if (this.userRegForm.valid) {
      if (this.userRegForm.value.psw == this.userRegForm.value.cpsw) {
        this.pswCheck = false
        //api call
        this.ds.userRegister(this.userRegForm.value.uname,this.userRegForm.value.email,this.userRegForm.value.ph,this.userRegForm.value.psw)
    .subscribe({
      next:(result:any)=>{
        alert(result.message)
        console.log(result);
        
        localStorage.setItem("username",result.uname)
        localStorage.setItem("phone",result.ph)

        console.log(result.email);
        console.log(result.ph);
        
        
        this.route.navigateByUrl('user-login')
      },
      error:(result:any)=>{
        alert(result.error.message)
        
      }
    })

      }
      else {
        this.pswCheck = true
      }

    }
    else {
      alert('invalid')
    }


  }

}
