import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  username:any;
  constructor() { }

  ngOnInit(): void {
  if(sessionStorage.getItem('nome') !=null)
  {
    this.username=sessionStorage.getItem('nome');
 console.log(this.username);
  }else{
    this.username="Iniciar Sessao";
    console.log(this.username);
  }
  }

}
