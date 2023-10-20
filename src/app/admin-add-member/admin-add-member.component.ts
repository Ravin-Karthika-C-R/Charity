import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-add-member',
  templateUrl: './admin-add-member.component.html',
  styleUrls: ['./admin-add-member.component.css']
})
export class AdminAddMemberComponent implements OnInit{
  constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}

  addMemberForm=this.fb.group({
    mname:[''],
    mimage:[''],
    address:[''],
    phn:[''],
    adproof:[''],
    idproof:[''],
    description:['']

  })
  ngOnInit(): void {
    
  }
  addmember(){
    const path=this.addMemberForm.value
    let memberData={
      mname:path.mname,
      mimage:path.mimage,
      address:path.address,
      phn:path.phn,
      adproof:path.adproof,
      idproof:path.idproof,
      description:path.description
    }
    if(this.addMemberForm.valid){
      this.ds.addMembers(memberData).subscribe({
        next:(result:any)=>{
          alert("New member added")
          // this.route.navigateByUrl("admin-home")
        }
      })
      this.addMemberForm.reset()

    }

  }


}
