import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProdutoService } from '../loja-service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss'
})
export class Produtos implements OnInit {

  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private cd: ChangeDetectorRef
  ) {}

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