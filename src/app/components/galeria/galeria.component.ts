import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  animais = [
    {
      nome: 'Doguinho',
      cor: 'Caramelo',
      foto: 'https://cantinhodosanimais.com.br/wordpress/wp-content/files/cantinhodosanimais.com.br/2024/12/chihuahua-1-1024x683.webp'
    },
    {
      nome: 'Doguinho',
      cor: 'Caramelo',
      foto: 'https://img.freepik.com/fotos-gratis/cachorros-de-beagle-a-procura-de-algo_1150-18193.jpg?semt=ais_items_boosted&w=740'
    },
    {
      nome: 'Doguinho',
      cor: 'Caramelo',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroQiDdUvxULORuLpBkzkIgdE1EHpaco9sWw&s'
    },
    {
      nome: 'Doguinho',
      cor: 'Caramelo',
      foto: 'https://ufape.com.br/wp-content/uploads/2024/06/Ufape-Hospital-Veterinario-filhote-de-cachorro-brincando-na-grama-GS2-MKT-Freepik.jpg'
    }
  ];

  onAdotarClick(animal: any) {
    // Por enquanto não faz nada
    console.log('Clicou para adotar:', animal);
  }
}
