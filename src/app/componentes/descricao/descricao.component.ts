import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {


  descricao:any;
  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data:any) { 

    this.descricao=data;

  }

  ngOnInit(): void {
  
 
 
  }

}
