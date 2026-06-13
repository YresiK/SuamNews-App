import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private noticiasService: NoticiasService) {}

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

  adicionarFavorito(n: any) {
    const existe = this.favoritos.some(f => f.title === n.title);
    if (!existe) {
      this.favoritos.push(n);
    }
  }

  toggleFavoritos() {
    this.mostrandoFavoritos = !this.mostrandoFavoritos;
  }

  get listaExibida() {
    return this.mostrandoFavoritos ? this.favoritos : this.noticias;
  }
}