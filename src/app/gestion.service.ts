import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GestionService {
    private baseurl='http://127.0.0.1:8080/api';
    private upload='http://127.0.0.1:8080/api/upload';
    
    constructor(private http:HttpClient){}
    login(email:string,motdepasse:string){
        return this.http.get("http://127.0.0.1:8080/api/personne/"+email+"/"+motdepasse)
    }

}
