import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdleComponent } from './idle.component';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  declarations: [IdleComponent]
})
export class IdleModule { }
