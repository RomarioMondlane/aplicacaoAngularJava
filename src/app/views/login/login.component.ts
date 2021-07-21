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
  url="http://localhost:7979/";
  user: User={
    username:"",
    password:""  ,
        
    
  }
 public sessao:any;

    constructor(private http:HttpClient,private userservice: UserService,private rota:Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('token','');
    sessionStorage.setItem('nome','');
    
  }

  iniciar():void{
    const headers = new HttpHeaders({Authorization:'Basic ' + btoa(this.user.username+":"+this.user.password)}) ;
    
    console.log(this.user);
    this.http.get<Observable<boolean>>(this.url,{headers, responseType: 'text' as 'json'}).subscribe(isValid=>{
     if(isValid){   
      sessionStorage.setItem('token', btoa(this.user.username +':'+this.user.password));
      sessionStorage.setItem('nome',this.user.username);
      this.sessao=window.sessionStorage.getItem('token');
      console.log(this.sessao);
           this.userservice.showMessage("Logado");
           this.rota.navigate(["vender"]);
           }else{
            this.userservice.showMessage("Autenticacao falhou");
           

          }


    }
);}

getUser():void{

  
  const headers = new HttpHeaders({Authorization:'Basic ' + btoa(this.user.username+":"+this.user.password)}) ;
    
  this.http.post("http://localhost:7979/user",{headers})




 }



  }


