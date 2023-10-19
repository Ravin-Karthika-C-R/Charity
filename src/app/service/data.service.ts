import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl="http://localhost:5005"


  constructor( private http:HttpClient) { }
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

    //view members - admin
    getMembers(){
      return this.http.get(`${this.baseUrl}/admin/viewMember`)
    }

    //view staffs - admin
    getStaffs(){
      return this.http.get(`${this.baseUrl}/admin/viewStaff`)
    }

    //view users - admin
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

      //api to get single product
     getSingleMember(id: any){
      return this.http.get(`${this.baseUrl}/admin-single-member/${id}`)
     }


     
    //edit Members
    editMembers(body:any){
     
      return this.http.put(`${this.baseUrl}/admin-member-update`,body)
    }

      
}
