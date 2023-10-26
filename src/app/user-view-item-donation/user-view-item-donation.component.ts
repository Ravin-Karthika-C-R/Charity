import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-view-item-donation',
  templateUrl: './user-view-item-donation.component.html',
  styleUrls: ['./user-view-item-donation.component.css']
})
export class UserViewItemDonationComponent {
  items:any=[] 
  userId:any=""
  constructor(private ds:DataService,private route:Router,private datePipe: DatePipe){}
  ngOnInit(): void {
    this.getitems()
  }
  getitems(){

    if(localStorage.getItem("user")){
      this.userId= localStorage.getItem("user")
      this.ds.getItemDonation(this.userId).subscribe({
       next:(data:any)=>{
         this.items=data.message
         console.log(this.items);
          console.log(data);
          console.log(Array.isArray(this.items));
          
       }
      })
     }
  }

}
