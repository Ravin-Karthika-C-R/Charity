import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-member',
  templateUrl: './admin-view-member.component.html',
  styleUrls: ['./admin-view-member.component.css']
})
export class AdminViewMemberComponent implements OnInit{
  members:any=[]

  constructor(private ds:DataService, private route:Router){}
  ngOnInit(): void {
    this.getAllMembers()
  }

  getAllMembers(){
    this.ds.getMembers().subscribe({
      next:(result:any)=>{
        this.members=result.message
      }
    })
  }

  deleteMember(id:any){
    this.ds.deleteMembers(id).subscribe({
      next:(result:any)=>{
        this.getAllMembers()
      }
    })
  }

  
  editMember(id:any){
    this.route.navigateByUrl(`admin-edit-member/${id}`)
  }

}
