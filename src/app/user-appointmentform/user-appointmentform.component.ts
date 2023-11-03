import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-appointmentform',
  templateUrl: './user-appointmentform.component.html',
  styleUrls: ['./user-appointmentform.component.css']
})
export class UserAppointmentformComponent {
  // constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}

  // addFundForm=this.fb.group({
  //   // appointment:['',[Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg|webp))/)]],
  //   // title:['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
  //   // description:['',[Validators.required, Validators.pattern('[a-zA-Z0-9 .]+')]],
  //   // startdate:[''],
  //   // enddate:['']

  // })
  // addfund(){
  //   const path=this.addFundForm.value
  //   let fundData={
  //     // image:path.image,
  //     // title:path.title,
  //     // description:path.description,
  //     // startdate:path.startdate,
  //     // enddate:path.enddate

      
  //   }
  //   if(this.addFundForm.valid){
  //     this.ds.addFunds(fundData).subscribe({
  //       next:(result:any)=>{
  //         alert("Fund Raiser data added")
          
  //       }
  //     })
  //     this.addFundForm.reset()

  //   }
  //   else{
  //     alert('Please fill all the fields');
  //   }
  // }

}
