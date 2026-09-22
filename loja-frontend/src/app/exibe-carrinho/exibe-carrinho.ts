import { Component, computed, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  selector: 'app-exibe-carrinho',
  standalone: true,
  imports: [],
  templateUrl: './exibe-carrinho.html'
})
export class ExibeCarrinhoComponent {

  carrinho = inject(CarrinhoService);

  quantidade = computed(() =>
    this.carrinho.itens().reduce(
      (total, item) => total + item.quantidade,
      0
    )
  );

}