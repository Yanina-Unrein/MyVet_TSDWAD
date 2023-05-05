import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PetshopComponent } from './petshop/petshop.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InicioComponent,
    SucursalesComponent,
    PetshopComponent,
    ContactoComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    InicioComponent,
    SucursalesComponent,
    PetshopComponent,
    ContactoComponent,
    QuienesSomosComponent
  ]
})
export class PagesModule { }
