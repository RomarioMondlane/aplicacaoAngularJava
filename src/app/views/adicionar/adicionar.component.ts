import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Produto } from 'src/app/componentes/produto.model';
import { ProdutoServiceService } from 'src/app/Servicos/produto-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/componentes/user.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
 
  produto: Produto={nome:"",
  categoria:"",
  preco:0,
  quantidade:0
}

public categoriaDados:any;
 

url="http://localhost:7979/salvar";
urlCategoria="http://localhost:7979/listarCategoria";

  constructor(private http:HttpClient,private r:Router,private servico:ProdutoServiceService, private serv:UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('token')===''){
      this.r.navigate(['/']);
    }else{

    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  

    this.http.get(this.urlCategoria,{headers}).subscribe(data=>{
      
      this.categoriaDados=data;
      
      console.log(this.categoriaDados)
      })

    }

  }

  
  Adicionar():void{
    
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  

    this.http.post(this.url,this.produto,{headers, responseType: 'text' as 'json'}).subscribe(data=>{
      
      this.serv.showMessage(JSON.stringify(data));
      
     
      

   
      })

     }
 ;


}

