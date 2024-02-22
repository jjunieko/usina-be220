import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/CardItems';
import { CardService } from 'src/services/card.services';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  items: Item[] = [
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

  cards: Observable<Item[]> | any ;

  constructor(private itemsService: CardService) {}

  ngOnInit() {
    this.cards = this.itemsService.getTeacherOnline();
  }

}
