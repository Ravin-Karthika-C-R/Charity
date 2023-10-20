import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-edit-staff',
  templateUrl: './admin-edit-staff.component.html',
  styleUrls: ['./admin-edit-staff.component.css']
})
export class AdminEditStaffComponent {
  mid:any=""
  pdata:any={}
 
  constructor(private ar:ActivatedRoute, private ds:DataService, private route:Router){

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      // console.log(data["id"]);
      this.mid=data.id

      this.ds.getSingleStaff(this.mid).subscribe({
        next:(result:any)=>{
          // console.log(result.message);
          this.pdata=result.message
          console.log(this.pdata);
                    
        }
      })
      
      })
    }

    editStaff(){
      this.ds.editStaffs(this.mid,this.pdata).subscribe({
        next:(result:any)=>{
          // alert("Updated")
          alert(result.message)
          this.route.navigateByUrl("admin-view-staffs")
        }
      })
      
    }

}
