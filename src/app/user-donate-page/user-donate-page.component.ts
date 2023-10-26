import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-donate-page',
  templateUrl: './user-donate-page.component.html',
  styleUrls: ['./user-donate-page.component.css']
})
export class UserDonatePageComponent implements OnInit{

  addFundUserForm=this.fb.group({
    fname:[''],
    phone:[''],
    amount:[''],
    cardno:[''],
    expdate:[''],
    cvv:['']

  })
  userId  :any=""
  fId:any=""
  f:any=""
  funds:any=""
  pid:any=""
  pdata:any=[]
  uname:any=""
  title:any=""
  ph:any=""
  email:any=""

  constructor(private ds:DataService,private ar:ActivatedRoute, private fb:FormBuilder,private route:Router){}
  
  
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
      this.ds.getSingleFundDetailUser(this.pid).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
          this.fId=localStorage.setItem("fundId",this.pdata._id)
          this.title=localStorage.setItem("titlename",this.pdata.title)

          console.log("fund data",this.pdata)
          console.log("fundId",this.pdata._id);
          
          
        }
      })
    })
    // this.addfunduser()
  }
  
  addfunduser(){
    this.userId=localStorage.getItem("user")
    this.fId=localStorage.getItem("fundId")
    
    // this.title=localStorage.setItem("title",this.title)
    // this.ph=localStorage.setItem("ph",this.ph)
    // this.email=localStorage.setItem("email",this.email)

    this.uname=localStorage.getItem("username")
    this.title=localStorage.getItem("title")
    this.ph=localStorage.getItem("phone")
    this.email=localStorage.getItem("emailid")
    
    console.log(this.uname);
    

    // this

    const path=this.addFundUserForm.value
    let fundData={
      fId:this.fId,
      userId:this.userId,
      uname:this.uname,
      title:this.title,
      ph:this.ph,
      email:this.email,
      fname:path.fname,
      phone:path.phone,
      amount:path.amount,
      cardno:path.cardno,
      expdate:path.expdate,
      cvv:path.cvv
    }


    if(this.addFundUserForm.valid){
      this.ds.donateFundUser(fundData).subscribe({
        next:(result:any)=>{
          // alert(result)
          console.log(result);
          
          alert("Money transferred successfully")
          this.route.navigateByUrl("user-receipt")

        }
      })

    }
  }
  

}
