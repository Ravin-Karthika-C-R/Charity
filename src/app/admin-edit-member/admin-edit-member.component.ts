import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-edit-member',
  templateUrl: './admin-edit-member.component.html',
  styleUrls: ['./admin-edit-member.component.css']
})
export class AdminEditMemberComponent implements OnInit{
  mid:any=""
  pdata:any={}
  mname:any
  mimage:any
  address:any
  phn:any
  idproof:any
  description:any

  
  constructor(private ar:ActivatedRoute, private ds:DataService, private route:Router){

  }
  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
      console.log(data["id"]);
      this.mid=data["id"]
    })
      
      this.ds.getSingleMember(this.mid).subscribe({
        next:(result:any)=>{
          // console.log(result.message);
          this.pdata=result.message
          console.log(this.pdata);
                    
        }
      })
    }

    editMember(){
      var mname=this.mname
      var mimage=this.mimage
      var address=this.address
      var phn=this.phn
      var idproof=this.idproof
      var description=this.description

      const body={
        mname,mimage,address,phn,idproof,description
      }

      this.ds.editMembers(body).subscribe({
        next:(result:any)=>{
          alert("Updated")
          alert(result.message)
          this.route.navigateByUrl("admin-view-member")
        }
      })
      
    }



}
