import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  menuType: any = 'overlay';

  constructor(private menu: MenuController) { }

  openMenu() {
    this.menu.enable(true, 'start');
    this.menu.toggle('start');
  }

  ngOnInit() {}

}
