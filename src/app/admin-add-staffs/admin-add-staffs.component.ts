import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-staffs',
  templateUrl: './admin-add-staffs.component.html',
  styleUrls: ['./admin-add-staffs.component.css']
})
export class AdminAddStaffsComponent implements OnInit{
  pswCheck: any = false
  constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}

  addStaffForm=this.fb.group({
    sname:['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    loginid:['',[Validators.required, Validators.pattern('[0-9]+')]],
    phone:['',[Validators.required, Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw:['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]

  })
  ngOnInit(): void {
    
  }
  addstaff(){
    const path=this.addStaffForm.value
    let staffData={
      sname:path.sname,
      loginid:path.loginid,
      phone:path.phone,
      psw:path.psw
    }
    if(this.addStaffForm.valid){
      if (this.addStaffForm.value.psw == this.addStaffForm.value.cpsw) {
        this.pswCheck = false
      
        this.ds.addStaffs(staffData).subscribe({
          next:(result:any)=>{
            alert("New staff added")
            // this.route.navigateByUrl("admin-home")
          }
        })
        this.addStaffForm.reset()
  
      }
      else {
        this.pswCheck = true
      }
      
    }
    else{
      alert('Please fill all the fields');
    }
  }



}
