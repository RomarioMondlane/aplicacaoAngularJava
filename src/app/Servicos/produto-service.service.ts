import { Injectable } from '@angular/core';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import {Produto} from'src/app/componentes/produto.model'



@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor( private snack: MatSnackBar) { }

  showMessage(msg: string): void{
    console.log(msg);
    this.snack.open(msg,' ',{
      duration:2000,
      horizontalPosition:"center",
      verticalPosition:"top"

    })
  }

}
