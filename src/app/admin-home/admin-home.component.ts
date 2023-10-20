import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  login:any=""
  constructor(private ds:DataService, private route:Router){}

  logout(){
    localStorage.removeItem("uname")
    this.ds.login.next(false)
    this.route.navigateByUrl("")
  }
}
