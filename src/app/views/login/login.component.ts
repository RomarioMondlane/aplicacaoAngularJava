import { Component, OnInit, Output } from '@angular/core';
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
 @Output() codigo:any;
 public sessao:any;

    constructor(private http:HttpClient,private userservice: UserService,private rota:Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('token','');
    sessionStorage.setItem('nome','');
    
  }

  iniciar():void{
    
    if(sessionStorage.getItem('token')===''){
 
      const headers = new HttpHeaders({Authorization:'Basic ' + btoa(this.user.username+":"+this.user.password)}) ;
     this.http.get<Observable<boolean>>(this.url,{headers, responseType: 'text' as 'json'}).subscribe(isValid=>{
       if(isValid){   
        sessionStorage.setItem('token', btoa(this.user.username +':'+this.user.password));
        sessionStorage.setItem('nome',this.user.username);
        this.sessao=window.sessionStorage.getItem('token');
        const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  
        this.http.get("http://localhost:7979/codigo",{headers, responseType: 'text' as 'json'}).subscribe(data=>{
        
          this.codigo=data;
          
    
        })
         
        
        this.userservice.showMessage("Sessão iniciada com sucesso!");
            this.rota.navigate(["vender"]);
            }else{
              this.userservice.showMessage("Inicio de Sessão  falhou");
             }
      }
   );
    }
    else{
      this.userservice.showMessage("Para iniciar nova sessão termine a atual");
            

    }
   
   }
   

  

getUser():void{

  
  const headers = new HttpHeaders({Authorization:'Basic ' + btoa(this.user.username+":"+this.user.password)}) ;
    
  this.http.post("http://localhost:7979/user",{headers})




 }



  }


