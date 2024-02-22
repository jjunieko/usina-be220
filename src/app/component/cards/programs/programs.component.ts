import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  mode: any = [
    {
      title: 'PROGRAMAS',
      icon: 'add-circle-outline',
      newItem: 'NOVO',
      imageSrc: '../../../assets/musculacao2.jpeg',
      imageAlt: `image`,
      subtitle: 'Continuar treinamento',
      description: 'LEVANTAMENTO DE PESO',
      isRegister: false,
    },
    {
      title: '',
      icon: '',
      imageSrc: '../../../assets/musculacao.jpg',
      imageAlt: `image`,
      subtitle: '',
      description: 'YOGA Experimente',
      isRegister: false,
    },
    {
      title: '',
      icon: '',
      newItem: '',
      imageSrc: '../../../assets/musculacao.jpg',
      imageAlt: `image`,
      subtitle: '',
      description: 'YOGA Experimente',
      isRegister: false,
    },
  ];

  constructor() { }

  ngOnInit() { }

}
