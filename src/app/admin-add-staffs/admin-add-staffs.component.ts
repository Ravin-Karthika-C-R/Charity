import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-add-staffs',
  templateUrl: './admin-add-staffs.component.html',
  styleUrls: ['./admin-add-staffs.component.css']
})
export class AdminAddStaffsComponent implements OnInit{

  constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}

  addStaffForm=this.fb.group({
    sname:[''],
    loginid:[''],
    phone:[''],
    psw:[''],
    cpsw:['']

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
      this.ds.addStaffs(staffData).subscribe({
        next:(result:any)=>{
          alert("New staff added")
          // this.route.navigateByUrl("admin-home")
        }
      })
      this.addStaffForm.reset()

    }
  }



}
