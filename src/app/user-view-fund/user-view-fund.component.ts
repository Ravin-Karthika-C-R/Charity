import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

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
  id:any=""
  dates:any=""
  amounts:any=""

  
  constructor(private ar: ActivatedRoute, private ds: DataService, private route: Router) { }
  ngOnInit(): void { 
    if (localStorage.getItem("user")) {
        this.fundtitle = localStorage.getItem("titlename")
        this.uname = localStorage.getItem("username")
        this.ph = localStorage.getItem("phone")
        this.email=localStorage.getItem("emailid")
        this.userId=localStorage.getItem("user")
        this.dates=localStorage.getItem("dateTime")
    }
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
    
    
    // this.getfund()
    this.getFunds();
    console.log("donateid",this.userId);
    console.log(this.pdata);
    
    this.dates = new Date();
    //amount

    console.log(this.dates);
    
  }

  getFunds(){

 
    this.ds.receiptuser(this.userId).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log("result",this.pdata);
        
        const receivedDate = this.pdata?.dt; // Use the safe navigation operator
        if (receivedDate) {
          localStorage.setItem("dateTime", receivedDate);
          this.dates = receivedDate;
          console.log(this.pdata);
          console.log(this.fundtitle);
          console.log(this.userId);
          console.log("Dates and time:", receivedDate);
        }
        
      }
    })

  
  }
  //download stament
  pdfExport(){
    const invoiceContentElement=document.getElementById('invoice_container') as HTMLElement;
    
    //pass html element,pass any options, to convert
    html2canvas(invoiceContentElement,{}).then(canvas=>{

      var pageWidth=350;
      var pageHeight =427;

      //calculate the image actual height to fit with canvas and pdf
      var imgHeight = canvas.height * pageWidth/canvas.width;
      
      //is convert the canvas into string url
        const imgData=canvas.toDataURL('image/png');
        // console.log(imgData);

        //initialize the pdf
        let pdf = new jsPDF('p','mm','a4');

        //add the image into pdf
        pdf.addImage(imgData,'PNG',30,50,pageWidth,imgHeight)
        pdf.save('receipt.pdf')//generate pdf
        
        
    })

  }

}
