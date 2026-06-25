import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'bem-vindo',
    pathMatch: 'full',
  },

  {
    path: 'bem-vindo',
    loadComponent: () =>
      import('./bem-vindo/bem-vindo.page').then((m) => m.BemVindoPage)
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage)
  },

  {
    path: 'cadastro',
    loadComponent: () =>
      import('./cadastro/cadastro.page').then((m) => m.CadastroPage)
  },

  {
    path: 'noticias',
    loadComponent: () =>
      import('./noticias/noticias.page').then((m) => m.NoticiasPage)
  },

  {
    path: 'sobre',
    loadComponent: () =>
      import('./sobre/sobre.page').then((m) => m.SobrePage)
  },
  {
  path: 'detalhes-noticia',
  loadComponent: () =>
    import('./detalhes-noticia/detalhes-noticia.page')
      .then(m => m.DetalhesNoticiaPage)
}

];

