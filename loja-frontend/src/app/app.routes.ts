import { Routes } from '@angular/router';
import { Produtos } from './produtos/produtos';

export const routes: Routes = [
    { path: "produtos", component: Produtos },
    { path: "", redirectTo: "/produtos", pathMatch: "full"}

];
