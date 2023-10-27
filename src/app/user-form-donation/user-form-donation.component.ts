import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-form-donation',
  templateUrl: './user-form-donation.component.html',
  styleUrls: ['./user-form-donation.component.css']
})
export class UserFormDonationComponent {

  constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}
userId:any=""
uname:any=""
  addDonationForm=this.fb.group({
    
    itemname:[''],
    detail:[''],
    quantity:[''],
    address:[''],
    city:[''],
    pincode:[''],
    datetime:['']

  })

  adddonation(){
    const path=this.addDonationForm.value
    this.userId=localStorage.getItem("user")
    this.uname=localStorage.getItem("username")
    let dData={
      userId : this.userId,
      uname:this.uname,
      itemname:path.itemname,
      detail:path.detail,
      quantity:path.quantity,
      address:path.address,
      city:path.city,
      pincode:path.pincode,
      datetime:path.datetime,

    }
    if(this.addDonationForm.valid){
      this.ds.addAllDonation(dData).subscribe({
        next:(result:any)=>{
          console.log(result);
          console.log(this.userId);
          console.log(dData);
          
          
          alert("Your donation request done successfully!!!")
          // this.route.navigateByUrl("admin-home")
        }
      })
      this.addDonationForm.reset()

    }
  }
}
