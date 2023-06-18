import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule } from '@angular/router';
//import { NgxSpinnerModule } from 'ngx-spinner/public_api';


@NgModule({
  declarations: [
    PerfilComponent,
    MenuComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    //NgxSpinnerModule
  ],
  exports: [
    PerfilComponent,
    MenuComponent,
    CarritoComponent
  ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
