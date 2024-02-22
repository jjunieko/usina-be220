import { ContentsComponent } from './../component/cards/contents/contents.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../component/profile/profile.component';
import { MenuComponent } from '../component/menu/menu.component';
import { CardsComponent } from '../component/cards/cards.component';
import { ProgramsComponent } from '../component/cards/programs/programs.component';



@NgModule({
  declarations: [ProfileComponent, MenuComponent, CardsComponent, ProgramsComponent, ContentsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MenuComponent, ProfileComponent, CardsComponent, ProgramsComponent, ContentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModuleModule { }
