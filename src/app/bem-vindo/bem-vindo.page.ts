import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class BemVindoPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

    setTimeout(() => {

      this.router.navigate(['/home']);

    }, 2500);

  }

}