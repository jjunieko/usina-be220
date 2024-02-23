import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/CardItems';
import { CardService } from 'src/services/card.services';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @ViewChild('swiperContainer') swiperContainer: any;
  cards: Observable<Item[]> | any ;

  constructor(private itemsService: CardService) {}

  ngOnInit() {
    this.cards = this.itemsService.getTeacherOnline();
  }

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
