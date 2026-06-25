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
import { sendPasswordResetEmail } from 'firebase/auth';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

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

    await Haptics.impact({
      style: ImpactStyle.Medium
    });

    this.router.navigate(['/noticias']);

  } catch {
    await Haptics.vibrate();
    const toast = await this.toastController.create({
      message: 'Email ou senha inválidos',
      duration: 2500
    });

    await toast.present();
  }
}
async recuperarSenha() {

  if (!this.email) {

    const toast = await this.toastController.create({
      message: 'Digite seu e-mail primeiro',
      duration: 2500
    });

    await toast.present();
    return;
  }

  try {

    await sendPasswordResetEmail(
      this.auth,
      this.email
    );

    const toast = await this.toastController.create({
      message: 'E-mail de recuperação enviado',
      duration: 3000
    });

    await toast.present();

  } catch {

    const toast = await this.toastController.create({
      message: 'Erro ao enviar e-mail',
      duration: 3000
    });

    await toast.present();
  }

}

}