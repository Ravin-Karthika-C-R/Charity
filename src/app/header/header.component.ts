import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // login:any=""
  // constructor(private ds:DataService, private route:Router){}

  constructor(private rout:Router){}
  
  //logout
  logout(){
    localStorage.removeItem("user")
    localStorage.removeItem("username")
    localStorage.removeItem("titlename")
    localStorage.removeItem("phone")
    localStorage.removeItem("emailid")
    localStorage.removeItem("fundId")

    this.rout.navigateByUrl("")
}
}
