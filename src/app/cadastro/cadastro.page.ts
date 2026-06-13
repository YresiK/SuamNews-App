import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  ToastController
} from '@ionic/angular/standalone';

import { Router, RouterLink } from '@angular/router';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { app } from '../firebase.config';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class CadastroPage {

  nome = '';
  email = '';
  senha = '';

  auth = getAuth(app);
  db = getFirestore(app);

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  async cadastrar() {

    try {

      const credencial = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.senha
      );

      await addDoc(collection(this.db, 'usuarios'), {
        uid: credencial.user.uid,
        nome: this.nome,
        email: this.email,
        criadoEm: new Date()
      });

      const toast = await this.toastController.create({
        message: 'Cadastro realizado com sucesso!',
        duration: 2500
      });

      await toast.present();

      this.router.navigate(['/home']);

    } catch (erro: any) {

      let mensagem = 'Erro ao cadastrar usuário';

      switch (erro.code) {

        case 'auth/weak-password':
          mensagem = 'A senha precisa ter pelo menos 6 caracteres';
          break;

        case 'auth/email-already-in-use':
          mensagem = 'Este e-mail já está em uso';
          break;

        case 'auth/invalid-email':
          mensagem = 'E-mail inválido';
          break;

        case 'auth/missing-password':
          mensagem = 'Digite uma senha';
          break;

        case 'auth/operation-not-allowed':
          mensagem = 'Cadastro com e-mail/senha desativado';
          break;
      }

      const toast = await this.toastController.create({
        message: mensagem,
        duration: 3000
      });

      await toast.present();
    }
  }
}