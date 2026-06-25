import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';

import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    CommonModule,
    FormsModule
  ]
})
export class NoticiasPage implements OnInit {

  noticias: any[] = [];
  favoritos: any[] = [];
  mostrandoFavoritos = false;

  constructor(private noticiasService: NoticiasService, private router: Router) {}

  ngOnInit() {
    this.carregarNoticias();
  }

  carregarNoticias() {
    this.noticiasService.getNoticias().subscribe({
      next: (data: any) => {

        // 🔥 REMOVE NOTÍCIAS SEM IMAGEM
        this.noticias = (data.articles || []).filter((n: any) =>
          n.urlToImage &&
          n.urlToImage.trim() !== ''
        );

      },
      error: (err) => {
        console.error('Erro API:', err);
      }
    });
  }

  alternarFavorito(n:any){

  const index = this.favoritos.findIndex(
    f => f.title === n.title
  );

  if(index >= 0){

    this.favoritos.splice(index,1);

  }else{

    this.favoritos.push(n);

  }

}

  toggleFavoritos() {
    this.mostrandoFavoritos = !this.mostrandoFavoritos;
  }

  get listaExibida() {
    return this.mostrandoFavoritos ? this.favoritos : this.noticias;
  }

  abrirNoticia(n:any){

  localStorage.setItem(
    'noticiaSelecionada',
    JSON.stringify(n)
  );

  this.router.navigate(['/detalhes-noticia']);

}

ehFavorito(n:any){

  return this.favoritos.some(
    f => f.title === n.title
  );

}

}