import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.component.html',
  styleUrls: ['./patrimonio.component.css']
})
export class PatrimonioComponent implements OnInit {

public  pp:any;

  url="http://localhost:7979/patrimonio";
  constructor(private r:Router,private http:HttpClient) {

   }
 ngOnInit(): void {
      if(sessionStorage.getItem('token')===''){
        this.r.navigate(['/']);
      }else{
  
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
  

    this.http.get(this.url,{headers}).subscribe(data=>{
      
      this.pp=data;
      

    })
  }


  
  }

  imprimir():void{

    
  }

}
