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
 
  constructor(private ar:ActivatedRoute, private ds:DataService, private route:Router){

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      // console.log(data["id"]);
      this.mid=data.id

      this.ds.getSingleMember(this.mid).subscribe({
        next:(result:any)=>{
          // console.log(result.message);
          this.pdata=result.message
          console.log(this.pdata);
                    
        }
      })
      
      })
    }

    editMember(){
      this.ds.editMembers(this.mid,this.pdata).subscribe({
        next:(result:any)=>{
          // alert("Updated")
          alert(result.message)
          this.route.navigateByUrl("admin-view-member")
        }
      })
      
    }



}
