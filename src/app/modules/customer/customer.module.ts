import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ZorroModulesModule } from 'src/app/zorro-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ZorroModulesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
