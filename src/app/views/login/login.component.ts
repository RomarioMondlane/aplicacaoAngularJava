import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from 'src/app/componentes/user.model';
import { UserService } from 'src/app/componentes/user.service';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url="http://localhost:7979/listar";
  user: User={
    username:"",
    password:""  ,
        
  }
  

    constructor(private http:HttpClient,private userservice: UserService,private rota:Router) { }

  ngOnInit(): void {
    
    
  }

  iniciar():void{
    const headers = new HttpHeaders({Authorization:'Basic ' + btoa(this.user.username+":"+this.user.password)}) ;
    //{
      //'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      //'Content-type': 'application/x-www-form-urlencoded'
    //}
    console.log(this.user);
    this.http.get<Observable<boolean>>(this.url,{headers, responseType: 'text' as 'json'}).subscribe(data=>{
     this.userservice.showMessage("Logado");
     this.rota.navigate(["vender"]);
     console.log(data);
    }
);}
 
getUser():void{

  
  const headers = new HttpHeaders({Authorization:'Basic ' + btoa(this.user.username+":"+this.user.password)}) ;
    
  this.http.post("http://localhost:7979/user",{headers})




 }



  }


