import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-userfunddetails',
  templateUrl: './admin-view-userfunddetails.component.html',
  styleUrls: ['./admin-view-userfunddetails.component.css']
})
export class AdminViewUserfunddetailsComponent {

  items:any=[] 
  userId:any="" 
  
  constructor(private ds:DataService,private route:Router,private datePipe: DatePipe){}
  ngOnInit(): void {
    // get datetime
    
    this.getitems()
  }
  getitems(){
      this.userId= localStorage.getItem("user")

      // console.log(this.userId)
      this.ds.getAdminAllUserFundDonation().subscribe({
       next:(data:any)=>{
         this.items=data.message
         console.log(this.items);
          console.log(data);

          
          
       }
      })
     
  }
}
