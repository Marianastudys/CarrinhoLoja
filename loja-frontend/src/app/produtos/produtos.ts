import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { ProdutoService } from '../loja-service';
import { CarrinhoService } from '../carrinho-service';
import { ExibeCarrinhoComponent } from '../exibe-carrinho/exibe-carrinho';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ExibeCarrinhoComponent],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss'
})
export class Produtos implements OnInit {

  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private cd: ChangeDetectorRef
  ) {}

 carrinho = inject(CarrinhoService);
 
  ngOnInit(): void {

    console.log('Componente iniciou');

    this.buscarProdutos();
  }

  buscarProdutos(): void {

    console.log('Chamando API...');

    this.produtoService.buscarProdutos().subscribe({

      next: (resultado) => {

        console.log('Resposta da API:', resultado);
        console.log('Quantidade recebida:', resultado.length);

        this.produtos = resultado;

        this.cd.detectChanges();

      },

      error: (erro) => {

        console.error('ERRO NA API:', erro);

      }

    });

  }

}