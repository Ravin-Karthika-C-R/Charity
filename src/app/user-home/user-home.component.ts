import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  funds:any=[]
  uid:any=''

  constructor(private ds:DataService, private route:Router){}
  ngOnInit(): void {
    this.userHomeFundView()
  }
  userHomeFundView(){
    this.ds.getAllFundsUser().subscribe({
      next:(result:any)=>{
        this.funds=result.message
      }
    })
  }

}
