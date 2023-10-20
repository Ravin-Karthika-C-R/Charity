import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-edit-fund',
  templateUrl: './admin-edit-fund.component.html',
  styleUrls: ['./admin-edit-fund.component.css']
})
export class AdminEditFundComponent {
  fid:any=""
  pdata:any={}
 
  constructor(private ar:ActivatedRoute, private ds:DataService, private route:Router){

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      // console.log(data["id"]);
      this.fid=data.id

      this.ds.getSingleFundAdmin(this.fid).subscribe({
        next:(result:any)=>{
          // console.log(result.message);
          this.pdata=result.message
          console.log(this.pdata);
                    
        }
      })
      
      })
    }

    editFund(){
      this.ds.editFundAdmin(this.fid,this.pdata).subscribe({
        next:(result:any)=>{
          // alert("Updated")
          alert(result.message)
          this.route.navigateByUrl("admin-view-fund")
        }
      })
      
    }
}
