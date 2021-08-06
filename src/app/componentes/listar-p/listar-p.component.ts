import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/componentes/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogoComponent} from 'src/app/componentes/dialogo/dialogo.component'

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
  codigo:any;
  nome:any;
   
  constructor(private http:HttpClient,private userservice: UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
    this.nome=sessionStorage.getItem('nome');
      
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
    this.dialog.open(DialogoComponent);
  //this.userservice.showMessage("Ainda por desenvolver");

  }

  Apagar(X:any,K:any):void{
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  
        if(sessionStorage.getItem('nome')===K){

          this.userservice.showMessage("impossivel apagar esse usuario pois e o corrente logado");
        }else{
          this.http.get("http://localhost:7979/deleteUser?codigo="+X,{headers ,responseType: 'text' as 'json'  })
          .subscribe(
            res => {
              console.log(JSON.stringify(res));
             this.userservice.showMessage(JSON.stringify(res));
            
            
            })}
  
  
  }

}
