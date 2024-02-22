import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  items: any = [
    {
      title: 'PERSONAL ONLINE',
      icon: 'add-circle-outline',
      imageSrc: '../../../assets/musculacao.jpg',
      imageAlt: `image`,
      subtitle: 'NOVO TREINO',
      isRegister: false,
    },
    {
      title: '',
      imageSrc: '../../../assets/musculacao2.jpeg',
      imageAlt: `image`,
      subtitle: '',
      description: 'YOGA',
      isRegister: false,
    },
    {
      title: '',
      imageSrc: '../../../assets/musculacao2.jpeg',
      imageAlt: `image`,
      subtitle: '',
      description: 'AEROBICA',
      isRegister: false,
    },
  ];


  constructor() { }

  ngOnInit() {
   }

}
