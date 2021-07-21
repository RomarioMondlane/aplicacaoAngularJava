import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {Venda} from 'src/app/venda.model'
import { UserService } from 'src/app/componentes/user.service';
import { LoginComponent} from'src/app/views/login/login.component'



@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  public produto:any;
prod:Venda={
  codigo:0,
  quantidade:0
}



  public vende:any;
  public quantidade:any;
  url="http://localhost:7979/listar";
  constructor(private http:HttpClient,private userservice: UserService) { 


  }

  ngOnInit(): void {
   console.log(sessionStorage.getItem('token'));
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  

    this.http.get(this.url,{headers}).subscribe(data=>{
      console.log(data);
      this.produto=data;
      

    })





  }
vender():void{

  //console.log(this.prod);
  const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  

    this.http.post("http://localhost:7979/compra",this.prod,{headers, responseType: 'text' as 'json'}).subscribe(data=>{
      this.userservice.showMessage(JSON.stringify(data));
    })


}
}
