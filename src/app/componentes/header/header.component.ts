import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/componentes/user.service';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  username:any;
 foto: any;
 codigo:any;
 retrievedImage: any;
 base64Data: any;
 retrieveResonse: any;
 message: any;
 safe:any;
 imageName: any;
 perfil:any;
  url="http://localhost:7979/carregar";  
  constructor(private http:HttpClient,private userr:UserService,private rota:Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  if(sessionStorage.getItem('nome') ==='')
  { 
    this.username="Iniciar Sessao";
  }else{ 
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
    
    this.http.get("http://localhost:7979/codigo",{headers, responseType: 'text' as 'json'   })
      .subscribe(
        res => {
         this.codigo=res;
         console.log(this.codigo)
        }
      );
   
    this.getImage();
    this.username=sessionStorage.getItem('nome');
 
  }



  }
  getImage():void{
    
    const headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
      
    this.http.get("http://localhost:7979/listarUserUnico?id=3",{headers   })
      .subscribe(
        res => {
          console.log(res);
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/png;base64,' + this.base64Data;
         
         this.safe=this.sanitizer.bypassSecurityTrustUrl(this.retrievedImage); 
         console.log(this.safe);
        }
      );
  }
  

  terminar(): void{
    sessionStorage.setItem('token','');
    sessionStorage.setItem('nome','');
    this.userr.showMessage("Sessão terminada com sucesso!");
    this.rota.navigate(['/']);
  }

}
