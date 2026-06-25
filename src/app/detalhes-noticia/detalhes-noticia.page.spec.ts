import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesNoticiaPage } from './detalhes-noticia.page';

describe('DetalhesNoticiaPage', () => {
  let component: DetalhesNoticiaPage;
  let fixture: ComponentFixture<DetalhesNoticiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
