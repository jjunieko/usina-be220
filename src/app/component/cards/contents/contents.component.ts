import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/models/CardItems';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  @ViewChild('swiperContainer') swiperContainer: any;

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

  ngAfterViewInit() {
    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
