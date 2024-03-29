import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { MatSidenavModule} from'@angular/material/sidenav';
import { MatCardModule} from'@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './views/login/login.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from'@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdicionarComponent } from './views/adicionar/adicionar.component';
import { PatrimonioComponent } from './views/patrimonio/patrimonio.component';
import { VenderComponent } from './views/vender/vender.component';
import {MatSelectModule} from'@angular/material/select'
import {CommonModule} from '@angular/common';
import { ProdutoComponent } from './views/produtos/produto/produto.component'
import {MatMenuModule} from'@angular/material/menu';
import { CriarUserComponent } from './views/criar-user/criar-user.component'
import {MatProgressBarModule}from '@angular/material/progress-bar';
import { ListarPComponent } from './componentes/listar-p/listar-p.component';
import { DialogoComponent } from './componentes/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListaProdutosComponent } from './componentes/lista-produtos/lista-produtos.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DescricaoComponent } from './componentes/descricao/descricao.component'
 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
   
    
    AdicionarComponent,
    PatrimonioComponent,
    VenderComponent,
    ProdutoComponent,
    CriarUserComponent,
    ListarPComponent,
    ListaProdutosComponent,
    DescricaoComponent,
    
 ],entryComponents:[DialogoComponent,DescricaoComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
