import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../homework/User";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CustomService {
    constructor(private http: HttpClient){}

    getUsers(url:string):Observable<User[]>{
        return this.http.get<User[]>(url);
    }
    addUser(url:string, newUser:User):Observable<User>{
        return this.http.post<User>(url, newUser);
    }
    updateUser(url:string, updateUser:User):Observable<User>{
        return this.http.put<User>(url, updateUser);
    }
    deleteUser(url:string, User:User):Observable<User>{
        return this.http.delete<User>(url+User.id);
    }
}