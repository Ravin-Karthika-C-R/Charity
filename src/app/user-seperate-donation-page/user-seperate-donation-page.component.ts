import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-seperate-donation-page',
  templateUrl: './user-seperate-donation-page.component.html',
  styleUrls: ['./user-seperate-donation-page.component.css']
})
export class UserSeperateDonationPageComponent implements OnInit{
  funds:any=[]
  constructor(private ds:DataService, private route:Router){}
  
  ngOnInit(): void {
    this.userHomeFundView()
  }

  userHomeFundView(){
    this.ds.getAllFundsUser().subscribe({
      next:(result:any)=>{
        this.funds=result.message
        console.log(this.funds);
        
      }
    })
  }
}
