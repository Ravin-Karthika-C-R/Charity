import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
uname:any=""
email:any=""
ph:any=""
p:any=""
udata:any=[]


  constructor(private ds:DataService, private route:Router){}
  ngOnInit(): void {
    this.uname=localStorage.getItem("username")
    this.ph=localStorage.getItem("phone")
    this.email=localStorage.getItem("emailid")

    

  }

  edit(){
    this.route.navigateByUrl("user-edit-profile")
  }

}


