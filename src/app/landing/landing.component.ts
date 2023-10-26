import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  funduser:any=[]
  uid:any=''

  constructor(private ds:DataService, private route:Router){}
  ngOnInit(): void {
    this.landingDonateFund()
  }

  landingDonateFund(){
    this.ds.getAllFunds().subscribe({
      next:(result:any)=>{
        this.funduser=result.message
        console.log(this.funduser);
        
      }
    })
  }

  donate(){
    alert('Please login first')
    this.route.navigateByUrl('user-login')
  }

  
}
