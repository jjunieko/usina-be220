import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/CardItems';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  content: Item[]= [
    {
      title: 'CONTEÚDOS',
      icon: 'add-circle-outline',
      imageSrc: '../../../assets/musculacao.jpg',
      imageAlt: `image`,
      subtitle: 'NOVO TREINO',
      description: 'YOGA Experimente',
      isRegister: false,
    },
    {
      title: '',
      icon: 'add-circle-outline',
      imageSrc: '../../../assets/musculacao.jpg',
      imageAlt: `image`,
      subtitle: 'NOVO TREINO',
      description: 'YOGA Experimente',
      isRegister: false,
    },
    {
      title: '',
      icon: 'add-circle-outline',
      imageSrc: '../../../assets/musculacao.jpg',
      imageAlt: `image`,
      subtitle: 'NOVO TREINO',
      description: 'YOGA Experimente',
      isRegister: false,
    },
    {
      title: '',
      icon: 'add-circle-outline',
      imageSrc: '../../../assets/musculacao.jpg',
      imageAlt: `image`,
      subtitle: 'NOVO TREINO',
      description: 'YOGA Experimente',
      isRegister: false,
    },
  ];

  constructor() { }

  ngOnInit() { }

}
