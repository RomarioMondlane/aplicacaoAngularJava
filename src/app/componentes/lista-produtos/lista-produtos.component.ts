import { Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/componentes/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogoComponent} from 'src/app/componentes/dialogo/dialogo.component'
import {DescricaoComponent} from 'src/app/componentes/descricao/descricao.component'


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  url="http://localhost:7979/listar";  
  public useres:any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  safe:any;
  dadosProduto: any;
  imageName: any;
  codigo:any;
  quantidade:any;


  constructor(private http:HttpClient,private userservice: UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  
      
    this.http.get(this.url,{headers   })
      .subscribe(
        res => {
          this.useres=res;
        })
        this.http.get(this.url,{headers   })
        .subscribe(
          res => {
            this.dadosProduto=res;
           
          
          
          })
  
 
  }
 Comprar(x:any):void{
  this.quantidade= prompt("Insira a quantidade");
  this.accao(this.quantidade,x);
  //this.userservice.showMessage(x);
  
 }
 accao(q:any,c:any):void{

  const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
      this.http.post("http://localhost:7979/compra?codigo="+c+"&quant="+q,{headers ,responseType: 'text' as 'json'  })
      .subscribe(
        res => {
          this.userservice.showMessage(JSON.stringify(res));
      })
  
 }
 descricao(d:any):void{
    
  this.dialog.open(DescricaoComponent,{data:d});
 }


}
