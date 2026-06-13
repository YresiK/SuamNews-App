import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  ToastController
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase.config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    RouterLink,
    FormsModule
  ],
})
export class HomePage {

  email = '';
  senha = '';

  auth = getAuth(app);

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async login() {

    try {

      await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.senha
      );

      this.router.navigate(['/noticias']);

    } catch {

      const toast = await this.toastController.create({
        message: 'Email ou senha inválidos',
        duration: 2500
      });

      await toast.present();
    }
  }
}