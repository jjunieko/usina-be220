import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/CardItems';
import { CardService } from 'src/services/card.services';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  items!: Observable<Item[]>;

  constructor(private itemsService: CardService) {}

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

}
