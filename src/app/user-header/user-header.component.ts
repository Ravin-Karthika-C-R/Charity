import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {

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
