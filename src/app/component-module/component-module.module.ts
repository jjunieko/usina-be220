import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../component/profile/profile.component';
import { MenuComponent } from '../component/menu/menu.component';



@NgModule({
  declarations: [ProfileComponent, MenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MenuComponent, ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModuleModule { }
