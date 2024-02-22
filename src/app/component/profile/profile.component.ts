import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  title: string = 'Joao Junior';
  level: string = 'Nivel Roxo';
  imageUrl: string = '../../../assets/profile.jpeg';
  alt: string = `image-${this.title}`;

  constructor() { }

  ngOnInit() {}

}
