import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from './produtos/produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  buscarProdutos() {
    return this.http.get<Produtos[]>(this.url);
  }

  obterProdutoPorId(prodId: number): Observable<Produtos> {
    return this.#http.get<Produtos>(`${this.url}/${prodId}`)
  }
}