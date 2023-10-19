import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit{
  users:any=[]
  constructor(private ds:DataService){}
  
  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.ds.getUsers().subscribe({
      next:(result:any)=>{
        this.users=result.message
      }
    })
  }

  deleteUser(id:any){
    this.ds.deleteUser(id).subscribe({
      next:(result:any)=>{
        this.getAllUsers()
      }
    })
  }

}
