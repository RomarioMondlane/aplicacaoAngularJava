import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component'

import {PatrimonioComponent} from './views/patrimonio/patrimonio.component'
import {AdicionarComponent} from './views/adicionar/adicionar.component'
import {VenderComponent} from './views/vender/vender.component'
import {ProdutoComponent} from'./views/produtos/produto/produto.component'




const routes: Routes = [{
path: "",
component: LoginComponent

},{
  path:"adicionar",
  component: AdicionarComponent
},
{
  path:"patrimonio",
  component:   PatrimonioComponent
},{
  path:"vender",
  component: VenderComponent
},{
  
  path:"listar",
  component: ProdutoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
