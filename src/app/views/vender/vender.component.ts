import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {Venda} from 'src/app/venda.model'
import { UserService } from 'src/app/componentes/user.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  public produto:any;
prod:Venda={
  codigo:90,
  quantidade:10


}



  public vende:any;
  public quantidade:any;
  url="http://localhost:7979/listar";
  constructor(private http:HttpClient, private serv:UserService) { 


  }

  ngOnInit(): void {
    const headers = new HttpHeaders({Authorization:'Basic ' + btoa("r.monjane"+":"+"1234")}) ;
  

    this.http.get(this.url,{headers}).subscribe(data=>{
      console.log(data);
      this.produto=data;
      //const EXAMPLE_DATA: Patrimonio[]=data[0];
      

    })





  }
vender():void{

  console.log(this.prod);
  const headers = new HttpHeaders({Authorization:'Basic ' + btoa("r.monjane"+":"+"1234")}) ;
  

    this.http.post("http://localhost:7979/compra",this.prod,{headers}).subscribe(data=>{
      console.log(data);
      this.serv.showMessage("Vendido");
      
      //const EXAMPLE_DATA: Patrimonio[]=data[0];
      

    })


}
}
