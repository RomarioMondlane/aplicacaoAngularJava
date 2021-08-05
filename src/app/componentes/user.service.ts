import { Injectable } from '@angular/core';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient,private snack: MatSnackBar) {

  }

  
  showMessage(msg: string): void{
    console.log(msg);
    this.snack.open(msg,' ',{
      duration:2000,
      horizontalPosition:"end",
      verticalPosition:"top"

    })
  }

  
}
