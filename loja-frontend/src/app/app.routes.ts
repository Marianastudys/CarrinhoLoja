import { Routes } from '@angular/router';
import { Produtos } from './produtos/produtos';
import { CarrinhoCompras } from './carrinho-compras/carrinho-compras';

export const routes: Routes = [
    { path: "produtos", component: Produtos },
    { path: "carrinho", component: CarrinhoCompras },
    { path: "", redirectTo: "/produtos", pathMatch: "full"}

];
