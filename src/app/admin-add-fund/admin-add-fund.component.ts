import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin-add-fund',
  templateUrl: './admin-add-fund.component.html',
  styleUrls: ['./admin-add-fund.component.css']
})
export class AdminAddFundComponent {
  constructor(private ds:DataService, private route:Router, private fb:FormBuilder){}

  addFundForm=this.fb.group({
    image:[''],
    title:['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    description:['',[Validators.required, Validators.pattern('[a-zA-Z0-9 .]+')]],
    startdate:[''],
    enddate:['']

  })
  addfund(){
    const path=this.addFundForm.value
    let fundData={
      image:path.image,
      title:path.title,
      description:path.description,
      startdate:path.startdate,
      enddate:path.enddate

      
    }
    if(this.addFundForm.valid){
      this.ds.addFunds(fundData).subscribe({
        next:(result:any)=>{
          alert("Fund Raiser data added")
          
        }
      })
      this.addFundForm.reset()

    }
    else{
      alert('Please fill all the fields');
    }
  }

}
