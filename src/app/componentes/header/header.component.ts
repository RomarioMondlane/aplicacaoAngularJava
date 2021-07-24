import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/componentes/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  username:any;
  constructor(private userr:UserService,private rota:Router) { }

  ngOnInit(): void {
  if(sessionStorage.getItem('nome') ==='')
  { 
    this.username="Iniciar Sessao";
  }else{
    this.username=sessionStorage.getItem('nome');
 
  }
  }

  terminar(): void{
    sessionStorage.setItem('token','');
    sessionStorage.setItem('nome','');
    this.userr.showMessage("Sessão terminada com sucesso!");
    this.rota.navigate(['/']);
  }

}
