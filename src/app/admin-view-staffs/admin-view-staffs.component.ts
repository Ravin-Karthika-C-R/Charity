import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-view-staffs',
  templateUrl: './admin-view-staffs.component.html',
  styleUrls: ['./admin-view-staffs.component.css']
})
export class AdminViewStaffsComponent implements OnInit{
  users:any=[] 
  constructor(private ds:DataService){}
  ngOnInit(): void {
    this.getAllStaffs()
  }
  getAllStaffs(){
    this.ds.getStaffs().subscribe({
      next:(result:any)=>{
        this.users=result.message
      }
    })
  }

  deleteAllStaff(id:any){
    this.ds.deleteStaffs(id).subscribe({
      next:(result:any)=>{
        this.getAllStaffs()
      }
    })
  }

}
