import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CovidCountries {
    constructor(private http: HttpClient){}
    getData(url:string){
        return this.http.get(url);
    }
}