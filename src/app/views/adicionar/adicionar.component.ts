import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Produto } from 'src/app/componentes/produto.model';
import { ProdutoServiceService } from 'src/app/Servicos/produto-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/componentes/user.service';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
 
  produto: Produto={nome:"",
  preco:0,
  quantidade:0
}
 

url="http://localhost:7979/salvar";

  constructor(private http:HttpClient,private servico:ProdutoServiceService, private serv:UserService) { }

  ngOnInit(): void {
  }

  Adicionar():void{
    
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  

    this.http.post(this.url,this.produto,{headers, responseType: 'text' as 'json'}).subscribe(data=>{
      
      this.serv.showMessage(JSON.stringify(data));
      
     
      

   
      })

     }
 ;


}

