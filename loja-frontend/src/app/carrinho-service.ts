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

  constructor() {
    let itensSessao = this.recuperarSessao()
    if (itensSessao) {
      this.itens.set(itensSessao)
    }


  }

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
    this.salvarSessao()
  }

  aumentarQuantidade(id: number) {
    this.itens.update(itens =>
      itens.map(item =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
    this.salvarSessao()
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

  mostrarItensCarrinho() {
    
  }

  //Persite o objeto de carrinho na sessão
  salvarSessao() {
    localStorage.setItem('CARRINHO_LOJA_IFRN', JSON.stringify(this.itens()))
  }

  recuperarSessao() {
    let itens = localStorage.getItem('CARRINHO_LOJA_IFRN')
    if (itens) {
      return JSON.parse(itens)
    }
  }
}
