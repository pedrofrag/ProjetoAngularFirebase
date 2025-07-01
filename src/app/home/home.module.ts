import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { GaleriaComponent } from '../components/galeria/galeria.component';
import { MenuLateralComponent } from '../components/menu-lateral/menu-lateral.component';


import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [
    HomePage,
    GaleriaComponent,        // ✅ agora ele reconhece
    MenuLateralComponent     // ✅ esse também
  ]
})
export class HomePageModule {}

