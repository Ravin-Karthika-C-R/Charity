import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  login:any=""
  constructor(private ds:DataService, private route:Router){}

  ngOnInit(): void {
    this.ds.login.subscribe((logData:any)=>{
      this.login=logData
    })
  }
  logout(){
    localStorage.removeItem("user")
    this.ds.login.next(false)
    this.route.navigateByUrl("")
  }
}
