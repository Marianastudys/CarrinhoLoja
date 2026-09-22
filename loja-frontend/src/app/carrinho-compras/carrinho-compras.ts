import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  selector: 'app-carrinho-compras',
  imports: [],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.scss',
})
export class CarrinhoCompras {
  carrinho = inject(CarrinhoService);

}
