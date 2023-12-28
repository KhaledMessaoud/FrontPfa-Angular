import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

import {LocalStorageService} from 'ngx-localstorage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  motdepasse:string;
  user: any;
  users:any=[];

  constructor(private local:LocalStorageService,private route:Router,private serv:GestionService) { }

  ngOnInit(): void {
  }
  
  verif(){
    this.serv.login(this.email,this.motdepasse).subscribe(
      data => {this.users=data;
      if(this.users.length>0){
        this.route.navigate(["/acc"])
      }else{
        this.route.navigate(["/login"])
      } 
    },
    err =>{}
    )
  }

}
