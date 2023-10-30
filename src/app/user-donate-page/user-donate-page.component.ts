import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-donate-page',
  templateUrl: './user-donate-page.component.html',
  styleUrls: ['./user-donate-page.component.css']
})
export class UserDonatePageComponent implements OnInit{

  addFundUserForm=this.fb.group({
    
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
  dt:any=""

  constructor(private ds:DataService,private ar:ActivatedRoute, private fb:FormBuilder,private route:Router,private dp:DatePipe){}
  
  
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
      this.ds.getSingleFundDetailUser(this.pid).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
          this.fId=localStorage.setItem("fundId",this.pdata._id)
          this.title=localStorage.setItem("titlename",this.pdata.title)
          this.title=localStorage.getItem("titlename")

          console.log("fund data",this.pdata)
          console.log("fundId",this.pdata._id);
          console.log(this.title);
          
          
          
        }
      })
    })
    
    
    // this.addfunduser()

  }
  
  addfunduser(){
    this.userId=localStorage.getItem("user")
    this.fId=localStorage.getItem("fundId")
    this.uname=localStorage.getItem("username")
    this.title=localStorage.getItem("titlename")
    this.ph=localStorage.getItem("phone")
    this.email=localStorage.getItem("emailid")
    
    console.log(this.uname);
    
    //date
    this.dt=new Date()
    console.log(this.dt);


    // this.dt=this.dp.transform(date,'medium')

    var path=this.addFundUserForm.value
    var fundData={
      fId:this.fId,
      userId:this.userId,
      uname:this.uname,
      title:this.title,
      ph:this.ph,
      email:this.email,
      amount:path.amount,
      cardno:path.cardno,
      expdate:path.expdate,
      cvv:path.cvv,
      dt:this.dt
    }

    if(this.addFundUserForm.valid){
      this.ds.donateFundUser(fundData).subscribe({
        next:(result:any)=>{
          // alert(result)
          
          console.log("result",result);
          
          alert("Money transferred successfully")
          this.route.navigateByUrl("user-receipt")

        }
      })
    }
    else{
      alert("Invalid")
    }

    
      

    
    
  }
  

}
