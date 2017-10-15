import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosePaymentComponent } from './choose-payment.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ChoosePaymentComponent]
})
export class ChoosePaymentModule { }
