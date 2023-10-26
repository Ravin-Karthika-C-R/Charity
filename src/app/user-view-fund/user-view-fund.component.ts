import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-user-view-fund',
  templateUrl: './user-view-fund.component.html',
  styleUrls: ['./user-view-fund.component.css']
})
export class UserViewFundComponent implements OnInit {
  // pid: any;
  // transactionArray:any=[]
  spinner: any = true
  date: any = ""
  searchTerm: any = ""
  pdata: any = []
  userId:any=""
  fundid:any=""
  fundtitle:any=""
  uname:any=""
  ph:any=""
  email:any=""
  amnt:any=""
  
  constructor(private ar: ActivatedRoute, private ds: DataService, private route: Router) { }
  ngOnInit(): void { 
    if (localStorage.getItem("user")) {
        this.fundtitle = localStorage.getItem("titlename")
        this.uname = localStorage.getItem("username")
        this.ph = localStorage.getItem("phone")
        this.email=localStorage.getItem("emailid")
        this.userId=localStorage.getItem("user")

   
    }
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
    
    this.date = new Date();
    // this.getfund()
    this.getFunds();
    console.log("userid",this.userId);
    
  }

  getFunds(){
    // this.ds.getReceiptFundUser(this.userId).subscribe((data: any) => {

    //   this.pdata = data.message;
    //   console.log(this.pdata);
    // });
 
    this.ds.receiptuser(this.userId).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
        console.log(this.userId);
        
        
      }
    })

  
  }
  //download stament
  pdfExport(){
    window.print();

  }

}
