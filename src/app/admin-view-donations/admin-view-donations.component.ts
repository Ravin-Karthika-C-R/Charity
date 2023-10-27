import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-view-donations',
  templateUrl: './admin-view-donations.component.html',
  styleUrls: ['./admin-view-donations.component.css']
})
export class AdminViewDonationsComponent {

  items:any=[] 
  userId:any="" 
  uname:any=""
  email:any=""
  phoneNumber:any=""
  constructor(private ds:DataService,private route:Router,private datePipe: DatePipe){}
  ngOnInit(): void {
    this.getitems()
  }
  getitems(){
      this.userId= localStorage.getItem("user")
      // console.log(this.userId)
      this.ds.getAllItemDonationAdmin().subscribe({
       next:(data:any)=>{
         this.items=data.message
         console.log(this.items);
          console.log(data);

          
          
       }
      })
     
  }

}
