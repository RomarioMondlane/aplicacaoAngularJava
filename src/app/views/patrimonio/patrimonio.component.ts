import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.component.html',
  styleUrls: ['./patrimonio.component.css']
})
export class PatrimonioComponent implements OnInit {

public  pp:any;

  url="http://localhost:7979/patrimonio";
  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
  
    const headers = new HttpHeaders({Authorization:'Basic ' + btoa("r.monjane"+":"+"1234")}) ;
  

    this.http.get(this.url,{headers}).subscribe(data=>{
      
      this.pp=data;
      //const EXAMPLE_DATA: Patrimonio[]=data[0];
      

    })



  
  }

  imprimir():void{

    
  }

}
