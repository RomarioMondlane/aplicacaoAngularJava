import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/componentes/user.service';

@Component({
  selector: 'app-listar-p',
  templateUrl: './listar-p.component.html',
  styleUrls: ['./listar-p.component.css']
})
export class ListarPComponent implements OnInit {
  url="http://localhost:7979/listarUser";  
  public useres:any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  safe:any;
  dadosUser: any;
  imageName: any;
   
  constructor(private http:HttpClient,private userservice: UserService) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  
      
    this.http.get(this.url,{headers   })
      .subscribe(
        res => {
          this.useres=res;
        })
        this.http.get("http://localhost:7979/listarUser",{headers   })
        .subscribe(
          res => {
            this.dadosUser=res;
           
          
          
          })
  
  }

  Permissoes():void{

  this.userservice.showMessage("Ainda por desenvolver");

  }

}
