import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/CardItems';
import { CardService } from 'src/services/card.services';
import Swiper from 'swiper';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  @ViewChild('swiperContainer') swiperContainer: any;
  items!: Observable<Item[]>;

  constructor(private itemsService: CardService) {}

  ngOnInit() {
    this.items = this.itemsService.getItems();
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
