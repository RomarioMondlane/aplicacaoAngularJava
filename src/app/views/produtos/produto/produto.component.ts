import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Produto } from 'src/app/componentes/produto.model';
import { ProdutoDataSource, } from './produto-datasource';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Produto>;
  dataSource: any;

  url="http://localhost:7979/listar";
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Nome', 'Preco','Quantidade'];
  produto:any;
  constructor(private http:HttpClient) {
    //this.dataSource = new ProdutoDataSource();
  }

  ngAfterViewInit(): void {
    const headers = new HttpHeaders({Authorization:'Basic ' + btoa("r.monjane"+":"+"1234")}) ;
  

    this.http.get(this.url,{headers}).subscribe(data=>{
      console.log(data);
      //this.produto=data;
      this.dataSource=data;
      this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;


      //const EXAMPLE_DATA: Patrimonio[]=data[0];
      

    })
    
    
  }
}
