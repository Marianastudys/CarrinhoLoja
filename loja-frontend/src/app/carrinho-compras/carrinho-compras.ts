import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrinho-compras',
  imports: [CurrencyPipe],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.scss',
})
export class CarrinhoCompras {
  carrinho = inject(CarrinhoService);

}
