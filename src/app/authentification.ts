import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "ngx-localstorage";

@Injectable({
    providedIn: 'root'
   })
   export class Authentification {
    
    constructor(private local:LocalStorageService, private route:Router) { }
    canActivate(){
    let token= localStorage.getItem("token")
    let id =localStorage.getItem("id")
    if(token && id){
    return true;
    }else{
    this.route.navigate(['/login']);
    return false;
    }
    }
    }