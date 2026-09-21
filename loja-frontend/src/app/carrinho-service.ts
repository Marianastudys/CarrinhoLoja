import { Injectable, signal } from '@angular/core';
import { Produto } from './produto';
export type Item = {
  id: number;
  produto: Produto;
  quantidade: number;
};
@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {


  itens = signal<Item[]>([]);

  adicionarItem(produto: Produto) {
    const item = this.itens().find(i => i.id === produto.id);

    if (item) {
      this.itens.update(itens =>
        itens.map(i =>
          i.id === produto.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        )
      );
    } else {
      this.itens.update(itens => [
        ...itens,
        {
          id: produto.id,
          produto: produto,
          quantidade: 1
        }
      ]);
    }
  }

  aumentarQuantidade(id: number) {
    this.itens.update(itens =>
      itens.map(item =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  diminuirQuantidade(id: number) {
    this.itens.update(itens =>
      itens.map(item =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  }

  removerItem(id: number) {
    this.itens.update(itens =>
      itens.filter(item => item.id !== id)
    );
  }

  obterTotal(): number {
    return this.itens().reduce(
      (total, item) => total + item.produto.preco * item.quantidade,
      0
    );
  }
}
