import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl="http://localhost:5005"
  login=new BehaviorSubject(false)

  constructor( private http:HttpClient) {
    

   }
    //adminlogin api
    adminLogin(uname:any,psw:any){
      const body={uname,psw}
      return this.http.post(`${this.baseUrl}/admin/login`,body)
    }
    //user register
  userRegister(uname:any,email:any,ph:any,psw:any){
    const body={uname,email,ph,psw}
    return this.http.post(`${this.baseUrl}/user-signup`,body)
  }

  //api to user login

  userLogin(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseUrl}/user-login`,body)

  }

  //add members- admin
  addMembers(body:any){
    return this.http.post(`${this.baseUrl}/admin/addMember`,body)
  }

    //add staffs - admin
    addStaffs(body:any){
      return this.http.post(`${this.baseUrl}/admin/addStaff`,body)
    }

    //view all members  - admin
    getMembers(){
      return this.http.get(`${this.baseUrl}/admin/viewMember`)
    }

    //view all staffs - admin
    getStaffs(){
      return this.http.get(`${this.baseUrl}/admin/viewStaff`)
    }

    //view all users - admin
    getUsers(){
      return this.http.get(`${this.baseUrl}/admin/viewUsers`)
    }

    //user delete -admin
    deleteUser(id:any){
      return this.http.delete(`${this.baseUrl}/admin/user-delete/${id}`)
    }
    
    //staff delete -admin
    deleteStaffs(id:any){
      return this.http.delete(`${this.baseUrl}/admin/staff-delete/${id}`)
    }

     //Members delete -admin
     deleteMembers(id:any){
      return this.http.delete(`${this.baseUrl}/admin/member-delete/${id}`)
    }

      // api to get single member for editing - admin
     getSingleMember(id: any){
      return this.http.get(`${this.baseUrl}/admin-single-member/${id}`)
     }

     
    //edit Members -admin
    editMembers(id:any,bodyData:any){
      return this.http.put(`${this.baseUrl}/admin-member-update/${id}`,bodyData)
    }

     // api to get single staff for editing -admin
     getSingleStaff(id: any){
      return this.http.get(`${this.baseUrl}/admin-single-staff/${id}`)
     }
 
    //edit Members
    editStaffs(id:any,bodyData:any){
      return this.http.put(`${this.baseUrl}/admin-staff-update/${id}`,bodyData)
    }

    //add fund raising page - admin
    addFunds(body:any){
      return this.http.post(`${this.baseUrl}/admin/addFund`,body)
    }

     //view all added details  - admin
     getFundAddedDetails(){
      return this.http.get(`${this.baseUrl}/admin/viewAddedFunds`)
    }

    // api to get single staff for editing
      getSingleFundAdmin(id: any){
         return this.http.get(`${this.baseUrl}/admin-single-viewfund/${id}`)
      }

      //edit Members
    editFundAdmin(id:any,bodyData:any){
      return this.http.put(`${this.baseUrl}/admin-funds-update/${id}`,bodyData)
    }


    //delete fund from the view of  admin
    deleteFund(id:any){
      return this.http.delete(`${this.baseUrl}/admin/fund-delete/${id}`)
    }
      
}
