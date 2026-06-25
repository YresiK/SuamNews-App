import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes-noticia',
  templateUrl: './detalhes-noticia.page.html',
  styleUrls: ['./detalhes-noticia.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton
  ]
})
export class DetalhesNoticiaPage implements OnInit {

  noticia: any;

  ngOnInit() {

    this.noticia = JSON.parse(
      localStorage.getItem('noticiaSelecionada') || '{}'
    );

  }

}