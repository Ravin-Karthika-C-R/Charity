import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-view-fund',
  templateUrl: './admin-view-fund.component.html',
  styleUrls: ['./admin-view-fund.component.css']
})
export class AdminViewFundComponent {
  funds:any=[]
  

  constructor(private ds:DataService, private route:Router){}
  ngOnInit(): void {
    this.getAllAddedFundDetail()
  }

  getAllAddedFundDetail(){
    this.ds.getFundAddedDetails().subscribe({
      next:(result:any)=>{
        this.funds=result.message
        localStorage.setItem("fundTitle",result.title)
        
        console.log("fundtitle:",result.title);
        

      }
    })
  }


  editFundPage(id:any){
    this.route.navigateByUrl(`admin-edit-fund/${id}`)
  }
  
  deleteFundDetails(id:any){
    this.ds.deleteFund(id).subscribe({
      next:(result:any)=>{
        this.getAllAddedFundDetail()
      }
    })
  } 
}
